# Frontend Takehome Task

## Overview

This is a React-based project designed for a frontend take-home task. It includes a search engine interface with advanced filtering, pagination, and results display capabilities. The project uses custom hooks, reusable components, and a clean project structure to ensure maintainability and scalability.

## Table of Contents

- [Overview](#overview)
- [Design Clarifications](#design-clarifications)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Design Clarifications

> During the development of this project, there were a few design elements that appeared open to interpretation based on the provided Figma mockups. In a real-world scenario, these aspects would typically be clarified through discussions with the design team to ensure alignment. Below are some areas that may warrant further review:

1. **Text Link Styling**:

   - In the design, certain text links (e.g., "Home" under "Quick Links") featured a shadow effect. While this styling is unique, it is less common for text links.
   - For the purpose of maintaining readability, text shadows were omitted, but this can be revisited if a different look is preferred.

2. **Profile Thumbnail Border**:

   - The design showcased a circular profile thumbnail contained within a square border.
   - While this could be a specific stylistic choice, circular images are often displayed without an external square border in many UI patterns.
   - The implementation aimed to balance the design with common user interface practices, but adjustments can be made if the design calls for a specific appearance.

3. **Divider Line with Shadow**:
   - One of the divider lines in the design had a subtle shadow effect, which was different from other dividers.
   - This effect was unique and might be intended to draw attention to a specific section. To maintain consistency, the shadow effect was minimized.
   - If the shadowed appearance is meant to be a key design feature, further clarification could ensure it aligns with the intended visual style.

## Folder Structure

The project is organized as follows:

```
├── public/                       # Public assets accessible directly in the app
├── assets/                       # All static assets used in the app
│   └── icons/                    # SVG icons for UI components
│       └── index.js              # Exports all icons for easier imports
├── components/                   # Reusable UI components
│   └── common/                   # Common components used throughout the app
│       ├── Button/               # Custom button component
│       ├── Dropdown/             # Custom dropdown component (uses react-select)
│       ├── InputField/           # Input component with optional icon support
│       ├── Pagination/           # Pagination component for navigating pages
│       └── index.js              # Barrel file to export all common components
├── features/                     # Feature-specific components
│   ├── FilterContainer/          # Manages the filter UI and logic
│       ├── index.js              # FilterContainer component logic
│       └── styles.js             # Styles for the FilterContainer component
│   ├── PaginationContainer/      # Manages the pagination logic and UI
│       ├── index.js              # PaginationContainer component logic
│       └── styles.js             # Styles for the PaginationContainer component
│   ├── ResultsContainer/         # Displays the list of search results
│       ├── index.js              # ResultsContainer component logic
│       └── styles.js             # Styles for the ResultsContainer component
│   ├── SearchEngine/             # Main component that manages the search functionality
│       ├── index.js              # Search engine logic and rendering
│       └── styles.js             # Styles for the SearchEngine component
│   ├── SearchForm/               # Handles the search input and submit functionality
│       ├── index.js              # SearchForm component logic
│       └── styles.js             # Styles for the SearchForm component
│   ├── SearchHeader/             # Displays the header for the search interface
│       ├── index.js              # SearchHeader component logic
│       └── styles.js             # Styles for the SearchHeader component
│   ├── Selectors/                # Handles items-per-page and sorting options
│       ├── index.js              # Selectors component logic
│       └── styles.js             # Styles for the Selectors component
│   └── index.js                  # Barrel file to export all feature components
├── layout/                       # Layout components for the overall structure of the app
│   ├── DashboardLayout/          # Main layout for the dashboard page
│       ├── index.js              # DashboardLayout component logic
│       └── styles.js             # Styles for the DashboardLayout component
│   ├── Footer/                   # Footer component for the app
│       ├── index.js              # Footer component logic
│       └── styles.js             # Styles for the Footer component
│   ├── Sidebar/                  # Sidebar navigation component
│       ├── index.js              # Sidebar component logic
│       └── styles.js             # Styles for the Sidebar component
│   └── UserProfile/              # Displays user profile info in the layout
│       ├── index.js              # UserProfile component logic
│       └── styles.js             # Styles for the UserProfile component
├── pages/                        # Main pages of the application
│   └── Search.js                 # Page for the search interface
├── hooks/                        # Custom hooks for reusable logic
│   ├── usePagination.js          # Manages pagination state and logic
│   └── useSearch.js              # Manages search, filtering, and sorting logic
├── services/                     # Services and API interactions
│   └── index.js                  # Contains data fetching and data processing logic
├── styles/                       # Global and theme-based styles
│   ├── theme.js                  # Theme settings like colors, font sizes, spacing
│   ├── GlobalStyles.js           # Global CSS styles applied throughout the app
│   └── index.js                  # Barrel file for exporting styles
├── App.js                        # Main app component that sets up routes and layout
├── index.js                      # Entry point for React rendering
└── README.md                     # Documentation and setup instructions for the project
```

## Features

- **Search Engine**: Allows users to search and filter results dynamically.
- **Filter Options**: Users can filter results based on category, decision, company, and date.
- **Pagination**: Custom hook for handling pagination, allowing smooth navigation through results.
- **Reusable Components**: Includes components like buttons, dropdowns, and input fields for easy reuse.
- **Custom Hooks**: `usePagination` and `useSearch` hooks encapsulate complex logic for better readability and reusability.
- **Theming**: Centralized theme configuration for easy customization of colors, fonts, and spacing.

## Installation

To run this project locally, follow these steps:

1. Clone this repository:

```
   git clone https://github.com/goleedev/spa-search-engine.git
```

2. Navigate to the project directory:

```
cd frontend-takehome-task
```

3. Install dependencies:

```
npm install && npm run start
```

4. Open your browser and navigate to http://localhost:3000 to see the app.

## Usage

- **Search**: Use the search bar to enter a keyword, then press "Enter" or click the search button to filter the results.
- **Filters**: Select filters for category, decision, company, and date to narrow down the results.
- **Pagination**: Use the pagination controls to navigate between pages of results.
- **Clear Filters**: Click "Clear Filters" to remove all applied filters and return to the results based on the search query.

## Technologies Used

- **React**: Library for building user interfaces.
- **Styled-components**: For styling components with CSS-in-JS.
- **React Hooks**: Custom hooks for managing stateful logic (usePagination and useSearch).
- **React-Select**: For creating custom dropdowns with a consistent look and feel.
- **React-DatePicker**: For selecting date ranges, used to filter results based on date.
- **Moment.js**: For date formatting and manipulation.
- **JavaScript ES6**: Modern JavaScript syntax and features.
