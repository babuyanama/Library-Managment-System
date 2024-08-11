# Library-Managment-System

Backend Folder Structure:

Inside the backend folder,these are the following folders and files:
config/config.json
controllers/bookController.js
controllers/libraryController.js
controllers/studentController.js
models/book.js
models/library.js
models/student.js
models/index.js
routes/book.js
routes/library.js
routes/student.js
package.json
server.js
Frontend Folder Structure:

Inside the frontend folder,these are following folders and files:
src/App.js
src/components/BookForm.js
src/components/DataGrid.js
src/components/LibraryForm.js
src/components/StudentForm.js
package.json
public/index.html

Database Models and Associations:
This model define's the structure of your database tables.
Make sure all models (book.js, library.js, student.js) are correctly defined and associated in the models/index.js.

Controllers:
Controllers handle the logic for creating, reading, updating, and deleting records.
Ensure that the controllers (bookController.js, libraryController.js, studentController.js) are correctly handling API requests.

Routes:
Routes define the API endpoints.
Ensure the routes (book.js, library.js, student.js) are correctly set up to map to the controller functions.

Server:
server.js starts the Express server and sets up the routes.
Ensure that the server.js file is configured correctly.

Explanation of the Code

index.html: The basic HTML structure where React will inject the app.

index.js: The entry point of the React application. It renders the App component into the root divison.

App.js: The main component that includes the header, form to add a book, and the list of books.

components/: Contains all the individual components like Header, BookList, AddBook, and BookItem.

styles/: Contains the CSS files for styling each component.

package.json: Manages the project dependencies and scripts.

OUTPUT:

1. Student
- Name: 
- Class: 
- Photo:
- Video:
  
Actions:
- [Save] [Cancel]

Grid:
| Name | Class | Photo | Video |
|------|-------|-------|-------|
|      |       |       |       |
| Edit | Delete |

---

2. Book
- Name: 
- Author:
- Publication: 
- Year:
  
Actions: 
- [Save] [Cancel]

Grid:
| Name | Author | Publication | Year |
|------|--------|-------------|------|
|      |        |             |      |
| Edit | Delete |

---

3. Library
- Student Name:
- Book Name:
- Start Date: 
- End Date:
  
Actions:
- [Save] [Cancel]

Grid:
| Student Name | Book Name | Start Date | End Date |
|--------------|-----------|------------|----------|
|              |           |            |          |
| Edit         | Delete    |

---

It shows the Library Management System, including the forms for adding students, books, and managing library transactions.
