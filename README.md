Project Overview
This web application provides a comprehensive set of features, including sidebar navigation, a search bar, user authentication, and a fully responsive design. The application integrates various modern tools and libraries to ensure a seamless user experience and efficient state management. Technologies such as React, React Router, SCSS, Firebase Authentication, and Mocky.io (for API interactions) are leveraged to build a robust application.

Technologies Used
React.js: A JavaScript library for building dynamic user interfaces.

React Router: A library for handling navigation and routing within the React application.

TypeScript: Ensures type-safe code and better development practices.

SCSS: SASS-based styling to enable modular, maintainable styles.

Firebase: Used for user authentication, providing secure sign-in and sign-out functionality.

React Icons: A collection of high-quality icons to enhance the user interface.

React Query: For efficient data fetching and state management from the server.

Mocky.io: Used for mocking API responses for testing and development purposes.

Custom Components: Includes reusable components such as the Search Bar, Filter Form, Navbar, Sidebar, etc.

Features Implemented
1. Sidebar Navigation
The sidebar is an essential part of the application's navigation system, providing links to various sections. The sidebar’s visibility is dynamically controlled based on the user's authentication status. It adapts to both mobile and desktop views, offering a responsive design that changes according to screen size.

Mobile-First Design: The sidebar can be toggled open or closed on mobile devices using a hamburger menu.

Link Highlighting: The active route is highlighted to indicate the current page.

Dynamic Link Rendering: The sidebar links are dynamically generated based on data from the sidebarLinks constant array.

Key Functionality:

Responsive Design: Custom SCSS ensures the sidebar is mobile-friendly.

Dynamic Rendering: Sidebar links are automatically rendered from a predefined list.

Logout Feature: Includes a logout button for easy sign-out and redirection to the login page.

2. Navbar
The Navbar is a prominent feature at the top of the application, containing essential elements such as the logo, user avatar, search bar, and mobile sidebar toggle.

Logo: A clickable logo that redirects to the homepage.

Search Bar: A dynamic search bar for querying data within the application.

User Avatar: Displays the authenticated user’s initials derived from their email address.

Hamburger Menu: Provides functionality for opening the mobile sidebar.

Key Functionality:

Responsive Design: Adjusts automatically for mobile and desktop views.

Authentication: Displays the user’s initials when logged in.

Sidebar Toggle: On mobile, a hamburger menu toggles the sidebar visibility.

3. Authentication
User authentication is managed via Firebase Authentication. The app allows users to sign in and out, with components like the sidebar and navbar conditionally rendered based on the user’s authentication state.

Login/Logout: Handled through Firebase’s signIn and signOut methods.

Conditional Rendering: The sidebar and navbar are hidden when the user is on the login or sign-up page.

Key Functionality:

Sign Out: Users can sign out with a click, which redirects them to the login page.

Firebase Integration: Handles user state, including login status and authentication.

4. Mobile Sidebar Toggle
On mobile screens, the sidebar is hidden by default and can be toggled open or closed using a hamburger menu. A close button (HiX from React Icons) is available to close the sidebar.

Key Functionality:

Toggle Sidebar: The sidebar can be opened or closed with a button click.

Overlay: An overlay appears when the sidebar is open, and clicking it closes the sidebar.

5. Filter Form
The Filter Form enables users to filter data within the application. This can be used for narrowing down search results, properties, or other relevant items based on various criteria.

Key Functionality:

Dynamic Filtering: The form dynamically updates based on user inputs.

Efficient Data Handling: Filters are applied to the data being displayed, allowing users to quickly find what they need.

6. Responsive Design
The entire application is built with responsiveness in mind, ensuring a seamless user experience across mobile, tablet, and desktop devices.

Sidebar: On smaller screens, the sidebar transforms into a toggleable menu to conserve space.

Navbar: The navbar adjusts to show a hamburger menu on mobile screens.

SCSS: Custom SCSS files ensure that layout changes for different screen sizes are handled efficiently.

7. React Icons
Icons are used throughout the application for consistency and improved user experience. The icons are sourced from the React Icons library.

Icons Used:

HiOutlineMenuAlt3: Hamburger menu icon.

IoMdNotificationsOutline: Notifications icon.

HiX: Close button icon.

Additional icons are used for avatars and other UI elements.

Component Structure
SideBar.ts: Contains the logic and rendering of the sidebar, designed to be responsive for both desktop and mobile screens.

Navbar.ts: Contains the main navigation bar, including the logo, search bar, and user avatar. It also handles mobile sidebar toggling.

MobileSidebar.ts: A mobile-friendly version of the sidebar that is displayed when the hamburger menu is clicked.

FilterForm.tsx: Handles user input for filtering and dynamically updates the displayed content.

Folder Structure
bash
Copy
Edit
src/
├── assets/
│   ├── images/
│   └── logo.svg
├── components/
│   ├── Navbar/
│   ├── Sidebar/
│   ├── SearchBar/
│   ├── MobileSidebar/
│   └── FilterForm/
├── constants/
│   └── sidebarLinks.ts
├── styles/
│   ├── navbar.scss
│   └── sidebar.scss
├── lib/
│   ├── context/
│   └── GetInit.js
├── pages/
│   ├── sign-in.tsx
│   └── sign-up.tsx
├── firebase/
│   └── auth.ts
└── App.tsx
How to Run the Project
Clone the repository:

bash
Copy
Edit
git clone https://github.com/OnyekwereMichael/lendsqr.git
cd lendsqr
Install dependencies:

bash
Copy
Edit
npm install
Run the application:

bash
Copy
Edit
npm run dev
Open your browser and navigate to http://localhost:5173 to view the application.

Future Improvements
Dynamic Search: Implement an actual search API to fetch results based on user input.

User Profile Page: Add functionality to allow users to update their personal information and settings.

Performance Optimization: Implement code splitting and lazy loading to optimize performance.

Unit Testing: Add unit tests for critical components to ensure stability and prevent regression.

License
This project is licensed under the MIT License