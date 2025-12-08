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
