#include <ncurses.h>
#include <stdbool.h>
#include <stdlib.h>
#include <time.h>
#include <unistd.h>

#define GRID_W 40
#define GRID_H 20
#define OFFSET_X 2
#define OFFSET_Y 2
#define TICK_MS 120
#define MAX_SNAKE (GRID_W * GRID_H)

typedef struct {
    int x;
    int y;
} Point;

typedef struct {
    int dx;
    int dy;
} Dir;

static bool points_equal(Point a, Point b) {
    return a.x == b.x && a.y == b.y;
}

static bool is_on_snake(Point p, const Point *snake, int len, bool ignore_tail) {
    int limit = len;
    if (ignore_tail && len > 0) {
        limit = len - 1;
    }
    for (int i = 0; i < limit; i++) {
        if (points_equal(p, snake[i])) {
            return true;
        }
    }
    return false;
}

static Point random_food(const Point *snake, int len) {
    Point food;
    do {
        food.x = rand() % GRID_W;
        food.y = rand() % GRID_H;
    } while (is_on_snake(food, snake, len, false));
    return food;
}

static void draw_border(void) {
    int left = OFFSET_X;
    int right = OFFSET_X + GRID_W + 1;
    int top = OFFSET_Y;
    int bottom = OFFSET_Y + GRID_H + 1;

    for (int x = left; x <= right; x++) {
        mvaddch(top, x, ACS_HLINE);
        mvaddch(bottom, x, ACS_HLINE);
    }
    for (int y = top; y <= bottom; y++) {
        mvaddch(y, left, ACS_VLINE);
        mvaddch(y, right, ACS_VLINE);
    }

    mvaddch(top, left, ACS_ULCORNER);
    mvaddch(top, right, ACS_URCORNER);
    mvaddch(bottom, left, ACS_LLCORNER);
    mvaddch(bottom, right, ACS_LRCORNER);
}

static void render_game(const Point *snake, int len, Point food, int score) {
    clear();
    mvprintw(0, 0, "Snake - Score: %d   (Arrows or WASD, q to quit)", score);

    draw_border();

    if (has_colors()) {
        attron(COLOR_PAIR(2));
    }
    mvaddch(OFFSET_Y + 1 + food.y, OFFSET_X + 1 + food.x, '*');
    if (has_colors()) {
        attroff(COLOR_PAIR(2));
    }

    for (int i = 0; i < len; i++) {
        if (has_colors()) {
            attron(COLOR_PAIR(1));
        }
        char ch = (i == 0) ? '@' : 'o';
        mvaddch(OFFSET_Y + 1 + snake[i].y, OFFSET_X + 1 + snake[i].x, ch);
        if (has_colors()) {
            attroff(COLOR_PAIR(1));
        }
    }

    refresh();
}

static Dir dir_from_key(int ch, Dir current) {
    Dir next = current;
    switch (ch) {
        case KEY_UP:
        case 'w':
        case 'W':
            if (current.dy != 1) {
                next.dx = 0;
                next.dy = -1;
            }
            break;
        case KEY_DOWN:
        case 's':
        case 'S':
            if (current.dy != -1) {
                next.dx = 0;
                next.dy = 1;
            }
            break;
        case KEY_LEFT:
        case 'a':
        case 'A':
            if (current.dx != 1) {
                next.dx = -1;
                next.dy = 0;
            }
            break;
        case KEY_RIGHT:
        case 'd':
        case 'D':
            if (current.dx != -1) {
                next.dx = 1;
                next.dy = 0;
            }
            break;
        default:
            break;
    }
    return next;
}

int main(void) {
    srand((unsigned int)time(NULL));

    initscr();
    cbreak();
    noecho();
    keypad(stdscr, TRUE);
    curs_set(0);
    timeout(TICK_MS);

    if (has_colors()) {
        start_color();
        init_pair(1, COLOR_GREEN, COLOR_BLACK);
        init_pair(2, COLOR_RED, COLOR_BLACK);
    }

    Point snake[MAX_SNAKE];
    int len = 3;
    snake[0] = (Point){ GRID_W / 2, GRID_H / 2 };
    snake[1] = (Point){ GRID_W / 2 - 1, GRID_H / 2 };
    snake[2] = (Point){ GRID_W / 2 - 2, GRID_H / 2 };

    Dir dir = { 1, 0 };
    int score = 0;
    Point food = random_food(snake, len);

    bool quit = false;
    bool game_over = false;

    while (!quit) {
        int ch = getch();
        if (ch == 'q' || ch == 'Q') {
            quit = true;
            continue;
        }

        dir = dir_from_key(ch, dir);

        Point new_head = { snake[0].x + dir.dx, snake[0].y + dir.dy };

        if (new_head.x < 0 || new_head.x >= GRID_W || new_head.y < 0 || new_head.y >= GRID_H) {
            game_over = true;
            break;
        }

        bool will_grow = points_equal(new_head, food);
        bool hit_self = is_on_snake(new_head, snake, len, !will_grow);
        if (hit_self) {
            game_over = true;
            break;
        }

        int new_len = len + (will_grow ? 1 : 0);
        if (new_len > MAX_SNAKE) {
            game_over = true;
            break;
        }

        for (int i = new_len - 1; i > 0; i--) {
            snake[i] = snake[i - 1];
        }
        snake[0] = new_head;
        len = new_len;

        if (will_grow) {
            score += 10;
            food = random_food(snake, len);
        }

        render_game(snake, len, food, score);
    }

    if (game_over) {
        render_game(snake, len, food, score);
        mvprintw(OFFSET_Y + GRID_H + 3, 0, "Game over! Final score: %d", score);
        mvprintw(OFFSET_Y + GRID_H + 4, 0, "Press any key to exit.");
        timeout(-1);
        getch();
    }

    endwin();
    return 0;
}
