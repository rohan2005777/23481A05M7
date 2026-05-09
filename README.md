 Campus Notifications Dashboard

A responsive, user-friendly frontend application for tracking and displaying real-time campus notifications, alerts, events, and announcements.

## Features

- **Categorized Dashboard**: Sort and filter notifications instantly by clicking on category tabs (All, Alert, Event, Announcement, Warning).
- **Dynamic Context**: Predefined messaging updates contextually based on the active filter selected by the user.
- **Clean Aesthetic**: Built with a clean, structural layout following core frontend best practices with high-contrast accessibility in mind.
- **Responsive Design**: UI that adapts perfectly to both desktop and mobile screens.

## Tech Stack

- **React.js**: For building interactive UI components.
- **Vite**: For fast development and optimized production builds.
- **Axios**: For making HTTP requests to the notification backend API.
- **Vanilla CSS**: For lightweight, custom styling without heavy framework dependencies.

## Getting Started

Follow these steps to run the application locally:

### Prerequisites
- Node.js (v16 or higher)
- npm (Node Package Manager)

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd notification_app_fe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173/` (or the port provided by Vite in the terminal).

## Folder Structure

- `/src/components` - Reusable UI components (Navbar, Footer, FilterBar, NotificationCard)
- `/src/pages` - Main application pages (Home)
- `/src/api` - API integration logic (Axios fetch functions)
- `/src/utils` - Helper utilities and middleware

## Developer Notes

This project was built focusing on strong frontend fundamentals, utilizing pure CSS for styling and functional React components for state management.
