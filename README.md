# Frontend Installation Guide for Oldage Home People Management and Fall Detection System

This guide provides step-by-step instructions to set up the frontend of the **Oldage Home People Management and Fall Detection System** on your local machine.

---

## Prerequisites

- **Angular Version**: 18.2.13
- **Node Version**: 20.14.0
- **NPM Version**: 10.8.1

---

## Step 1: Install Node.js and npm

1. **Download Node.js and npm**:
   - Visit the official Node.js website: [https://nodejs.org/](https://nodejs.org/).
   - Download and install **Node.js v20.14.0** (which includes **npm v10.8.1**).

2. **Verify Installation**:
   - Open a Command Prompt (cmd) or terminal.
   - Run the following commands to verify the installation:
     ```bash
     node -v
     npm -v
     ```
   - **Expected Output**:
     ```
     v20.14.0
     10.8.1
     ```

3. **Installation Video**:
   - For a visual guide, refer to this video: [Node.js Installation Video](https://www.youtube.com/watch?v=lt5D2EWZMN0).

---

## Step 2: Install Angular CLI (v18.2.13)

1. **Install Angular CLI**:
   - Open a Command Prompt (cmd) or terminal.
   - Run the following command:
     ```bash
     npm install -g @angular/cli@18.2.13
     ```

2. **Verify Angular Installation**:
   - Run the following command:
     ```bash
     ng version
     ```
   - **Expected Output**:
     ```
     Angular CLI: 18.2.13
     ```

---

## Step 3: Set Up the Frontend

1. **Clone the Repository**:
   - Clone the repository to your local machine:
     ```bash
     git clone <repository-url>
     ```
   - Replace `<repository-url>` with the actual URL of your Git repository.

2. **Navigate to the Project Folder**:
   - Go to the root folder of the cloned repository where the `package.json` file is located:
     ```bash
     cd <repository-folder>
     ```

3. **Install Dependencies**:
   - Run the following command to install all required dependencies:
     ```bash
     npm install
     ```

4. **Run the Application**:
   - Start the development server by running:
     ```bash
     ng serve
     ```
   - Open your browser and navigate to:
     ```
     http://localhost:4000
     ```

---

## Troubleshooting

- If you encounter any issues during installation, ensure that:
  - Node.js and npm are correctly installed and added to your system's PATH.
  - The correct versions of Angular CLI, Node.js, and npm are being used.
  - All dependencies are installed by running `npm install`.

---

## Support

For further assistance, please contact the development team or refer to the project documentation.