# Cognifyz Fullstack Internship

A collection of tasks and mini-projects completed during my Full Stack Web Development Internship at Cognifyz Technologies. This repository showcases my progression through various web development concepts including HTML forms, client-side validation, server-side processing with Node.js & Express, and responsive UI components.

## 📂 Project Structure

The repository represents a progressive learning path, with each task building upon the previous ones.

### **Task 1: Basic Form & Server Setup**

- **Objective:** Create a basic registration form and handle submissions.
- **Client-Side:** HTML form with fields for personal details (Name, Email, Gender, etc.).
- **Server-Side:** Node.js/Express server using `body-parser` to capture form data and render views using EJS.

### **Task 2: Dynamic Inputs & Validation**

- **Objective:** Enhance the form with dynamic fields and conditional logic.
- **Features:**
  - **Dynamic Fields:** 'Add Another Phone Number' button to inputs dynamically via JavaScript.
  - **Conditional Logic:** 'Other Country' field appears only when 'Others' is selected.
  - **Date Logic:** Validation and population of Date of Birth fields.
  - **Data Persistence:** Submissions are appended to a local `submissions.txt` file.

### **Task 3: Interactive UI & Navigation**

- **Objective:** Improve user experience with navigation and animations.
- **Features:**
  - **Tabbed Navigation:** distinct sections for "About Me", "Services", and "Application Form".
  - **Animations:** CSS fade-in effects for smooth transitions.
  - **New Fields:** "Internship Domain" and "Number of Weeks" added to the form.
  - **Styling:** Enhanced button hover effects and a custom footer.

### **Task 4: Security & Password Handling**

- **Objective:** Implement password fields with validation security measures.
- **Features:**
  - **Password Validation:** Enforces complexity (8+ chars, uppercase, lowercase, number, special char).
  - **Match Check:** Ensures "Confirm Password" matches the original.
  - **Visibility Toggle:** Show/Hide password functionality.
  - **Security:** Passwords are excluded from the display result page for security.

### **Task 5: Final Integration & Polish**

- **Objective:** A polished, fully functional web application combining all features.
- **Overview:** The final iteration integrates all previous features—dynamic forms, robust validation, interactive UI, and secure server-side processing—into a cohesive full-stack application.

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Node.js, Express.js
- **Templating:** EJS
- **Data Handling:** File System (fs)

## 🚀 How to Run

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/udaykumar0515/Cognifyz-Fullstack-Internship.git
    cd Cognifyz-Fullstack-Internship
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the server:**
    ```bash
    node Task5.js
    ```
    _(Note: You can run `Task1.js` through `Task5.js` individually to see the progress of each task)._
4.  **Access the app:** Open your browser and go to `http://localhost:3000`.

---

_Developed by Uday Kumar during the Cognifyz Technologies Internship._
