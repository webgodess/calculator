# Calculator_app

Calculator Project
This is a simple calculator project implemented using React. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division, as well as other functionalities like percentage calculation, decimal input, and history tracking.

Getting Started
To run this project locally, follow these steps:

Clone the repository or download the project files.
Open the project directory in your preferred code editor.
Install the necessary dependencies by running the command npm install or yarn install.
Start the development server by running the command npm start or yarn start.
Open your web browser and navigate to http://localhost:3000 (or the specified port) to view the calculator.
Project Structure
The project consists of the following files:

index.html: The HTML file that serves as the entry point for the application.
index.js: The JavaScript file responsible for rendering the React component and attaching it to the HTML file.
styles.css: The CSS file containing the styles for the calculator layout.
README.md: The readme file providing information about the project.
Usage
The calculator interface displays a history section, where the user's input expression is shown, and a result section that displays the calculated result. The available buttons allow the user to perform various operations.

Buttons and Functionality
Clear (C): Resets the calculator, clearing the history and result.
Modulo (%): Adds the modulo operator to the expression.
Backspace (←): Removes the last character from the expression.
Addition (+): Adds the addition operator to the expression.
Numerical Buttons (0-9): Appends the corresponding digit to the expression.
Subtraction (-): Adds the subtraction operator to the expression.
Multiplication (\*): Adds the multiplication operator to the expression.
Division (/): Adds the division operator to the expression.
Decimal (.): Adds a decimal point to the expression.
Equals (=): Evaluates the expression and displays the result.
Implementation Details
The calculator component is implemented as a class-based component in React. It utilizes the component's state to manage the history and result values.

The component's constructor initializes the state with an empty history and a result of 0. Various methods are implemented to handle button clicks and perform the necessary calculations. These methods include handleClick, getDecimal, getResult, checkZero, operatorHandler, and handleBack.

The render method defines the structure and layout of the calculator by utilizing JSX (JavaScript XML). The buttons are assigned appropriate event handlers based on their functionality.

Dependencies
This project has the following dependencies:

React: A JavaScript library for building user interfaces.
ReactDOM: A package that provides DOM-specific methods for React.
These dependencies are managed using a package manager like npm or yarn.

Conclusion
The calculator project provides a basic implementation of a calculator using React. It can be used as a starting point for further enhancements, such as adding more advanced mathematical operations or improving the user interface. Feel free to modify and expand upon the project to suit your needs.
