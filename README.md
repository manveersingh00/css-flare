# CSS-Flare - A Custom CSS Framework

## Description
CSS-Flare is a lightweight and modular **CSS framework** built with **Sass**, providing a custom theme for standard HTML elements and utility classes for common styling. It ensures a **consistent, responsive, and customizable design** for web projects.

## Features
- Built with **Sass** and modular **partials**.
- Custom-styled **HTML elements** including headings, lists, buttons, forms, inputs, and tables.
- **Utility classes** for colors, margins, padding, font sizes, and borders.
- Consistent and visually appealing **theme across all elements**.
- Fully **customizable** using Sass variables.

## Installation
1. **Clone the repository**  
   ```sh
   git clone https://github.com/manveersingh00/css-flare.git
   cd css-flare

2. **Installation dependencies (Sass)**
    ```sh
    npm install -g sass

3. **Compile SCSS to CSS**
    ```sh
    sass --watch scss/main.scss css/main.css

4. **Include the compiled CSS in your project**
    ```sh
    <link rel="stylesheet" href="css/main.css">

## Usage
1. **Buttons**  
     ```sh
    <button class="btn btn-primary">Primary Button</button>
    <button class="btn btn-secondary">Secondary Button</button>
    <button class="btn btn-outline">Outline Button</button>

2. **Typography**
     ```sh
    <h1>Heading 1</h1>
    <p class="fs-medium">This is a paragraph with medium font size.</p>

3. **Forms**
     ```sh
    <input type="text" class="input" placeholder="Enter text">
    <button class="btn btn-primary">Submit</button>

4. **Tables**
     ```sh
    <table class="table">
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>John Doe</td>
            <td>25</td>
        </tr>
    </table>

5. **Utility Classes**
     ```sh
    <div class="m-2 p-2">Margin and Padding Applied</div>
    <p class="fs-large">Large Font Size</p>

6. **Customization**
    - Modify the scss/_variables.scss file to customize the framework, change color, font style or size.
        ```sh
        $primary-color: #007bff;  
        $secondary-color: #6c757d;  
        $success-color: #28a745;  
        $error-color: #dc3545;  
        
        // Typography  
        $font-family: 'Arial', sans-serif;  
        $font-size-base: 16px; 
    
    - After making changes, recompile the framework
    
        ```sh
        sass scss/main.scss css/main.css


