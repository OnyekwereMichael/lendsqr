// SideBar.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import MobileSidebar from '../../root/component/MobileSidbar';
import { signOutUser } from '../../firebase/auth';

// Mock the Firebase auth signOutUser function
vi.mock('../../firebase/auth', () => ({
  signOutUser: vi.fn(),
}));


describe('MobileSideBar Component', () => {

  // Helper function to wrap component in Router
  const renderSidebar = (path: string) => {
    render(
      <MemoryRouter initialEntries={[path]}>
        <MobileSidebar />
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
