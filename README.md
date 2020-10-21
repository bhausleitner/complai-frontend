# COMPLAI Frontend
## Prototype Setup
To work on the webapp, simply follow these steps.

### Step 1: Node.js and npm Installation
In the first step, install the current version of Node.js on your system by going to [nodejs.org](https://nodejs.org/en/), as Angular requires version 10.9.0 or later. The installation of Node.js also includes the [npm package manager](https://docs.npmjs.com/about-npm/index.html) that is used by Angular download and install packages.

### Step 2: Angular CLI Installation
In the second step, install the Angular Command Line Interface (CLI) tool that is used to create projects, generate application and library code, and perform development tasks such as testing or deployment. To install the Angular CLI, run the following command in a terminal/ console:
```bash
npm install -g @angular/cli
```
### Step 3: Code Repository Setup
In the third step, clone the [frontend repo](https://dev.azure.com/cdtm-mpd/MPD/_git/frontend) hosted on Azure DevOps.

### Step 4: Requirements Installation
To install the requirements, run the following command in a terminal/ console from the root directory of the frontend repo:
```bash
npm install
```

### Step 5: IDE Setup
In the last step, use an IDE of your choice to start developing the webapp. COMPLAI recommends JetBrains’ WebStorm or Microsoft’s Visual Studio Code. 

## Codebase
The repo is structured as follows: 
```
root dir: contains config files for the code editor, formatter, Angular CLI, the Continuous Integration pipeline, and npm package requirements 
│   
└───projects
    |
    └───complai
        |   | 
        |   └───e2e: End-to-end test files
        |   | 
        |   └───src 
        |       |   index.html: Main html page served to websitevisitors
        |       |   main.ts: Main entry point of the application
        |       |   *.scss: Styling files
        |       |   test.ts: Main entry point for unit tests
        |       |
        |       └───app
        |       |   |   app-routing.module.ts: Routing setup
        |       |   |   app-routing.module.ts: Routing setup
        |       |   |
        |       |   └───app: Root component of the application
        |       |   |
        |       |   └───core: Core module containing animations, authentication, reducers, notifications 
        |       |   |
        |       |   └───features
        |       |   |   |
        |       |   |   └───workspace: Module implementing the workspace feature
        |       |   |   |
        |       |   |   └───landing: Module implementing the landing page
        |       |   |   |
        |       |   |   └───regulations: Module implementing the regulatory feed and summaries
        |       |   |   |
        |       |   |   └───settings: Module implementing the user settings
        |       |   |
        |       |   └───shared: Module containing reusable components
        |       |
        |       └───assets: Logos, icons, and static data
        |       |
        |       └───environments: Production and test environment files
        |       |
        |       └───themes: Themes configuration files
        |
        └───server: Server configuration
```
                                                                                                        