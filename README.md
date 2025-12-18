#REACT / DOM ASSIGNMENT
## React Hooks Notes
Hooks
Functions that allow state and other React features to be used in function components instead of class components.
1. useState Hook: Used to create and manage state in a component.
Uses:
i. Store and update values over time
ii. Manage multiple states or a single state object
Key Points:
1.	Returns a state value and a setter function
2.	The state can be updated using the previous value
3.	Object state updates must preserve existing properties
2. useEffect Hook: Handles side effects in function components.
Uses:
i. Fetch data
ii. Update the DOM
iii. Handle subscriptions
Key Points:
1.	Runs after rendering
2.	Dependency array controls when it runs
3.	The cleanup function prevents memory leaks
3. useRef Hook: Provides direct access to DOM elements.
Uses:
i. Focus inputs
ii. Clear values
iii. Access elements without re-rendering
4. useCallback Hook: Prevents callback functions from being recreated unnecessarily.
Uses:
i. Pass stable functions to child components
ii. Improve performance

5. useMemo Hook: Stores results of expensive calculations.
Uses:
i. Avoid repeated calculations
ii. Improve performance

6. useContext Hook: Shares data across components without prop drilling.
Uses:
i. Manage shared or global state
ii. Simplify data passing
7. useReducer Hook: Manages complex state using actions and reducers.
Uses:
i. Handle multiple state changes
ii. Alternative to external state libraries



## JavaScript HTML DOM Elements Notes
DOM Definition:
The Document Object Model represents HTML elements as JavaScript objects, allowing manipulation of content, style, and structure.
1. Finding HTML Elements

Methods:
1.	By Id: Returns a single element or null
2.	By Tag Name: Returns a collection of elements
3.	By Class Name: Returns elements with the same class
4.	By CSS Selector: Selects elements using CSS rules
5.	By Object Collections: Access built-in collections like forms and images
2. Common HTML Object Collections
• document.body
• document.forms
• document.images
• document.links
• document.head
• document.scripts
• document.title

## React Component Interaction and State Management
1. Components in React
React applications are built from multiple components.
Some components handle logic, while others only display data.
2. Rendering Components
React requires components to be wrapped in a single parent or fragment when rendering siblings.
3. Parent Component Role
The parent component:
1.	Manages shared state
2.	Passes data and functions to children
4. Lifting State Up
When multiple components need the same state, the state is moved to their closest common parent.
5. Props Usage
Props are used to pass:
1.	Data
2.	Functions for updating state
This allows children to trigger actions without owning state.
6. Component Responsibility
1.	Parent components manage logic and state
2.	Child components handle display and user interaction
7. Reusable Components
Reusable components:
1.	Avoid hardcoding values
2.	Receive data through props
3.	Can be used in different contexts
8. Handling User Input
User input is handled by updating the state through events, allowing React to control the UI.
9. Controlled Components
A controlled component’s value is managed by React state.
This ensures predictable behavior and easier validation.
10. Side Effects in React
Side effects include DOM access, browser updates, and external interactions.
They are handled using the useEffect hook.
11. State Placement
State should be placed only where needed to avoid unnecessary re-renders and improve performance.
Conclusion
React promotes:
1.	Component reusability
2.	Shared state through lifting the state up
3.	Controlled inputs
4.	Clean separation of responsibilities
These principles help build scalable and maintainable applications.






<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# react-project-setup

NPM (Node Package Manager)
NPM allows developers to use code written by others without needing to write it themselves. It is the default package manager for Node.js.
                      Uses of NPM
1.	It enables us to install libraries, frameworks, and other development tools using the CLI (Command Line Interface).
2.	It provides methods to install packages like React, Vite, Tailwind, and others.
3.	It manages all package versions so that the project does not break when there are duplicate or incompatible packages.
4.	It helps to run scripts.
5.	The NPM registry is a central database where JavaScript packages are uploaded, meaning individuals can upload their packages for others to use.

package.json
It is a JSON file located in the root directory of your project. It is the file that describes your project.
The package.json holds important information about the project. It contains human-readable metadata (like project name and description) as well as functional metadata like the package version and list of dependencies.
It includes:
•	name
•	version
•	description
•	scripts
•	dependencies
•	repository
•	and many other details about the project
It is powerful because it allows others to download and access a project on GitHub simply by running npm install.

Vite
Vite is a tool for creating and running React projects. It uses modern technology to start projects instantly.
Benefits of Vite
1.	It loads the application immediately (very fast).
2.	Hot Module Reloading (HMR) — when you edit your code, the browser updates automatically without refreshing.
3.	Simple project creation using the CLI:
npm create vite@latest <project name>
4.	It supports modern JavaScript like TypeScript, ES Modules, and JSX.
5.	It optimizes production builds, making your final project smaller, faster, and more SEO-friendly.
>>>>>>> c158c4979059a850ef53f00a5a1b4cb99aa88752
