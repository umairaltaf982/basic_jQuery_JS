# jQuery Tasks

This project contains multiple jQuery-based tasks demonstrating various functionalities such as toggling visibility, form validation, content expansion, theme switching, character counting, and random quote generation.

## Q1: Toggle Paragraph Visibility

### Description
- A webpage with two paragraphs inside a `<div>`.
- A button toggles the visibility of both paragraphs when clicked.
- Uses jQuery’s `.slideToggle()` method for smooth transitions.

## Q2: Real-Time Form Validation

### Description
- A form with the following fields:
  - Username (text input)
  - Phone Number (text input)
  - Email (text input)
  - Submit Button

### Validation Rules
- Show an error message if any field is left empty.
- Ensure Phone Number contains only numbers.
- Ensure Email contains `@` and `.`.
- If all fields are valid, display a success message without refreshing the page.

## Q3: Expand and Collapse a Section

### Description
- A "Read More" section with a short paragraph and a hidden detailed paragraph.
- A "Read More" button expands the section to reveal more content.
- Button text changes to "Read Less" when expanded.
- Uses jQuery’s `.slideDown()` and `.slideUp()` methods for smooth transitions.

## Q4: Theme Switcher

### Description
- Two buttons labeled "Light Mode" and "Dark Mode".
- Clicking "Light Mode" sets the background color to white and text to black.
- Clicking "Dark Mode" sets the background color to black and text to white.
- Uses jQuery’s `.css()` method to apply the changes dynamically.

## Q5: Character Counter for Textarea

### Description
- A `<textarea>` where users can type a message.
- Displays "Characters left: 100" below the textarea.
- Updates the counter as the user types.
- If the limit is exceeded, further typing is disabled.
- Uses jQuery’s `.keyup()` method to track character count.

## Q6: Random Quote Generator

### Description
- A `<p>` element to display a random motivational quote.
- A button replaces the text with a randomly chosen quote from a predefined list.
- Uses jQuery’s `.text()` and `.click()` methods to update the content dynamically.

---

### Technologies Used
- HTML
- CSS
- jQuery

### How to Run
1. Include jQuery in your project by adding the following CDN link in the `<head>` section of your HTML file:
   ```html
   <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
   ```
2. Create separate `HTML`, `CSS`, and `JS` files for each task.
3. Link the respective `.js` and `.css` files in your `HTML`.
4. Open the `index.html` file in a browser and interact with the features.

### Author
- Umair Altaf

### License
This project is open-source and available for modification and distribution.

