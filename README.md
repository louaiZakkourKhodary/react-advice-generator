# My React Advice App

This is a simple React application that fetches and displays random advices.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Custom Hooks](#custom-hooks)
- [Folder Structure](#folder-structure)

## Getting Started

### Prerequisites

Make sure you have the following tools installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher) or [Yarn](https://yarnpkg.com/) (v1.22 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/louaiZakkourKhodary/react-advice-generator.git
   ```

   Navigate to the project directory:
   cd your-react-advice-app
   Install the dependencies:
   npm install or yarn

## Usage

npm start yarn start
The application will start locally at http://localhost:3000 in your web browser.

## Folder Structure

your-react-advice-app/
├── src/
│ ├── components/
│ │ ├── Advice.js
│ │ ├── Loading.js
│ ├── LoadingContext.js
│ ├── App.js
├── public/
├── package.json
├── README.md

## Custom Hooks

useLoadingContext
The useLoadingContext hook is used to access the loading context provided by the LoadingProvider. It provides the following values:

isLoading: A boolean that indicates whether the app is currently in a loading state.
setIsLoading: A function to set the loading state.
advice: The fetched advice text.
setAdvice: A function to set the advice text.
adviceId: The ID of the fetched advice.
setAdviceId: A function to set the advice ID.
You can use this hook to access and update the app's loading and advice data in your components.
