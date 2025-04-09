// SideBar.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom'; // Use MemoryRouter for better control over routes in tests
import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import SideBar from '../../root/component/Sidebar';
import { signOutUser } from '../../firebase/auth';

// Mock the Firebase auth signOutUser function
vi.mock('../../firebase/auth', () => ({
  signOutUser: vi.fn(),
}));

// Mock sidebarLinks and IMAGES if needed
const mockSidebarLinks = [
  { label: 'Dashboard', route: '/dashboard', imgURL: 'home-icon.png' },
  { label: 'Customers', route: '/customers', imgURL: 'customers-icon.png' },
  { label: 'Businesses', route: '/businesses', imgURL: 'businesses-icon.png' },
  { label: 'Settings', route: '/settings', imgURL: 'settings-icon.png' },
  // Add more items as necessary for testing
];

const mockIMAGES = {
  Briefcase: 'briefcase-icon.png',
  Home: 'home-icon.png',
};

describe('SideBar Component', () => {

  // Helper function to wrap component in Router
  const renderSidebar = (path: string) => {
    render(
      <MemoryRouter initialEntries={[path]}>
        <SideBar />
      </MemoryRouter>
    );
  };

  // it('should render the sidebar and highlight active link', () => {
  //   renderSidebar('/dashboard');
  //   // Check if the sidebar renders
  //   expect(screen.getByText('Switch Organization')).toBeInTheDocument();
  //   expect(screen.getByText('Dashboard')).toBeInTheDocument();

  //   // Test active link (Dashboard should be active)
  //   const dashboardLink = screen.getByText('Dashboard').closest('li');
  //   expect(dashboardLink).toHaveClass('sidebar__nav-item--active');
  // });

  // it('should hide the sidebar on /sign-in and /sign-up routes', () => {
  //   renderSidebar('/sign-in');
  //   expect(screen.queryByText('Dashboard')).not.toBeInTheDocument();

  //   renderSidebar('/sign-up');
  //   expect(screen.queryByText('Dashboard')).not.toBeInTheDocument();
  // });

  it('should trigger sign-out when logout button is clicked', async () => {
    renderSidebar('/dashboard');
    const logoutButton = screen.getByRole('button', { name: /logout/i });

    // Simulate click event
    fireEvent.click(logoutButton);

    // Check if signOutUser function was called
    expect(signOutUser).toHaveBeenCalled();
  });

  it('should render customer, business, and settings sections', () => {
    renderSidebar('/dashboard');

    // Check if sections are rendered
    expect(screen.getByText('CUSTOMERS')).toBeInTheDocument();
    expect(screen.getByText('BUSINESSES')).toBeInTheDocument();
    expect(screen.getByText('SETTINGS')).toBeInTheDocument();
  });

});
