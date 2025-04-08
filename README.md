# JavaScript Calculator

A simple, interactive calculator built with HTML, CSS, and JavaScript. It supports basic arithmetic operations and handles operator replacement to ensure valid expressions.

## 🚀 Features

- Perform basic operations: `+`, `-`, `*`, `/`, `%`
- Replace an existing operator if a new one is entered
- Input cleanup: Clear (C), Delete last (X)
- Handles invalid expressions (shows `Error`)
- Input field updates dynamically on each button click

## 💡 How It Works

- Buttons are dynamically captured with `querySelectorAll`
- Each click updates the input box value
- Consecutive operators are auto-replaced with the most recent one
- On pressing `=`, the expression is evaluated using `eval()`
