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
    <button class="btn btn-danger">Danger Button</button>
    <button class="btn btn-warning">Warning Button</button>

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
    
6. **Font-sizes**
     ```sh
    <p class="fs-small">This is small size font.</p>
    <p class="fs-medium">This is a medium size font.</p>
    <p class="fs-large">This is large size font.</p>

7. **Font-weight**
     ```sh
    <p class="fw-light">This p has light font weight.</p>
    <p class="fw-normal">This p has normal font weight.</p>
    <p class="fw-bold">This p has bold font weight.</p>
    
8. **Borders**
     ```sh
    <p class="border p-2">Simple border.</p>
    <p class="border-none p-2">None border</p>
    <p class="border-thin p-2">Thin border</p>
    <p class="border-thick p-2">Thick border</p>
    <p class="border-thin border-rounded p-2">Rounded border</p>
    <p class="border-thin border-circle p-2">Circle border</p>
    
9. **Customization**
    - Modify the scss/_variables.scss file to customize the framework, change color, font style, font weight, border etc.
        ```sh
        // Colors
        $primary-color: #007bff;
        $secondary-color: #6c757d;
        $success-color: #28a745;
        $error-color: #dc3545;
        $warning-color: #ffc107;
        $info-color: #17a2b8;
        $light-color: #f8f9fa;
        $dark-color: #343a40;
        $text-color: #212529;
        $background-color: #ffffff;
        
        // Fonts
        $primary-font: 'Arial', sans-serif;
        $secondary-font: 'Verdana', sans-serif;
        $font-size-base: 16px;
        $font-size-small: 12px;
        $font-size-large: 24px;
        $font-weight-light: 300;
        $font-weight-normal: 400;
        $font-weight-bold: 700;
        
        // Borders
        $border-radius-sm: 4px;
        $border-radius-md: 8px;
        $border-radius-lg: 16px;
        $border-width-thin: 1px;
        $border-width-thick: 3px;
 
    
    - After making changes, recompile the framework
    
        ```sh
        sass scss/main.scss css/main.css


