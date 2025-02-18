# jQuery Tasks

This project contains multiple jQuery-based tasks demonstrating various functionalities such as toggling visibility, form validation, content expansion, theme switching, character counting, and random quote generation.

## Q1: Toggle Paragraph Visibility

### Description
- A webpage with two paragraphs inside a `<div>`.
- A button toggles the visibility of both paragraphs when clicked.
- Uses jQuery’s `.slideToggle()` method for smooth transitions.
  
  <img width="788" alt="image" src="https://github.com/user-attachments/assets/10dcdec3-82cf-4ed7-972c-060a5d87ec7a" />
  <img width="732" alt="image" src="https://github.com/user-attachments/assets/dde19fdb-9b0b-4910-8738-42d366489b45" />



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

  <img width="634" alt="image" src="https://github.com/user-attachments/assets/9a263442-6283-4bec-b495-150a7f4c0127" />
  <img width="641" alt="image" src="https://github.com/user-attachments/assets/8e7c6a5b-4eaa-48ad-b19e-c58c70ad8d36" />



## Q3: Expand and Collapse a Section

### Description
- A "Read More" section with a short paragraph and a hidden detailed paragraph.
- A "Read More" button expands the section to reveal more content.
- Button text changes to "Read Less" when expanded.
- Uses jQuery’s `.slideDown()` and `.slideUp()` methods for smooth transitions.

  <img width="768" alt="image" src="https://github.com/user-attachments/assets/4a458d19-9bf5-4f6c-82fa-06694a117787" />
  <img width="751" alt="image" src="https://github.com/user-attachments/assets/87960f01-9933-4c3f-a3e8-e8790fd5dd85" />



## Q4: Theme Switcher

### Description
- Two buttons labeled "Light Mode" and "Dark Mode".
- Clicking "Light Mode" sets the background color to white and text to black.
- Clicking "Dark Mode" sets the background color to black and text to white.
- Uses jQuery’s `.css()` method to apply the changes dynamically.

  <img width="430" alt="image" src="https://github.com/user-attachments/assets/65365ad6-8364-487e-9f9e-7da7f596d924" />
  <img width="477" alt="image" src="https://github.com/user-attachments/assets/4240f555-c446-4618-a57d-bae0dbfab2e2" />



## Q5: Character Counter for Textarea

### Description
- A `<textarea>` where users can type a message.
- Displays "Characters left: 100" below the textarea.
- Updates the counter as the user types.
- If the limit is exceeded, further typing is disabled.
- Uses jQuery’s `.keyup()` method to track character count.

  <img width="648" alt="image" src="https://github.com/user-attachments/assets/f6ed0fa4-4d02-451b-b689-30e18b95c986" />
  <img width="623" alt="image" src="https://github.com/user-attachments/assets/7db51da5-9c10-4a18-9711-4477560ebe41" />
  


## Q6: Random Quote Generator

### Description
- A `<p>` element to display a random motivational quote.
- A button replaces the text with a randomly chosen quote from a predefined list.
- Uses jQuery’s `.text()` and `.click()` methods to update the content dynamically.

<img width="821" alt="image" src="https://github.com/user-attachments/assets/2f11e487-eff7-4179-b7f2-5ee6ade0bb4c" />

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

