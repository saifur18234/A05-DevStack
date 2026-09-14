## Dev Stack Builder

A modern and responsive Dev Stack Builder web application built with React and TypeScript. Users can explore different development technologies and create their own personalized technology stack by adding and removing technologies dynamically.

#Technologies Used
-React 
-TypeScript 
-Vite 
-Tailwind CSS 
-React Toastify 
-JSON 

# 3  Features 
- Browse development technologies
- Build a personalized technology stack
- Add and remove technologies dynamically 


## 🧠 React Questions & Answers
# 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React code easier to read and helps us create the UI structure more clearly.

# 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data that can change inside a component.

# 3. What does the useState hook do, and where did you use it in this project?

useState is used to create and manage state in a React component. In this project, I used it to manage the technology list, selected stack, and loading state.

# 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects after a component renders. I used it to fetch the technology data from the data.json file when the application loads.

# 5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list. It allows React to efficiently update, add, or remove items when the list changes.

# 6. What is conditional rendering? Give an example from this project.

Conditional rendering means showing different UI based on a condition. In this project, I used it to show "Your stack is empty" when no technology is selected and to show the selected technologies when the stack is not empty.

# 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data and functions are passed from a parent to a child through props. In this project, the parent passes technology data and functions like handleAddToStack to the child. The child can communicate with the parent by calling the function received through props.


