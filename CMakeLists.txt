cmake_minimum_required(VERSION 3.16)
project(snake_ncurses C)

set(CMAKE_C_STANDARD 11)
set(CMAKE_C_STANDARD_REQUIRED ON)

find_package(Curses REQUIRED)

add_executable(snake
    src/main.c
)

target_include_directories(snake PRIVATE ${CURSES_INCLUDE_DIRS})
target_link_libraries(snake ${CURSES_LIBRARIES})
