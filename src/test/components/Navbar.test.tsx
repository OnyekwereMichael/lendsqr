import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Navbar from '../../root/component/Navbar';


// 🧪 Mock useAuth from AuthContext
vi.mock('../../lib/context/AuthContext', () => ({
  useAuth: () => ({
    currentUser: { email: 'testuser@example.com' },
  }),
}));

// 🧪 Mock getInitials function
vi.mock('../../lib/GetInit', () => ({
  getInitials: () => 'TU',
}));

// 🧪 Mock IMAGES (Logo + dropdown)
vi.mock('../../assets/images', () => ({
  IMAGES: {
    Logo: 'logo.png',
    dropdown: 'dropdown.png',
  },
}));

// 🧪 Mock Searchbar component
vi.mock('../../root/component/SearchBar', () => () => <input placeholder="search for anything" />);

// 🧪 Mock MobileSidebar
vi.mock('../../root/component/MobileSidbar', () => () => <div data-testid="mobile-sidebar" />);

describe('Navbar Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should not render on auth pages ("/" or "/sign-up")', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.queryByText('Docs')).not.toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/search for anything/i)).not.toBeInTheDocument();
  });

  it('should render the navbar with user initials and email', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText('TU')).toBeInTheDocument(); // Initials
    expect(screen.getByText('testuser')).toBeInTheDocument(); // Truncated email
    expect(screen.getByPlaceholderText(/search for anything/i)).toBeInTheDocument();
  });

  it('should toggle mobile sidebar when hamburger is clicked and close it', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <Navbar />
      </MemoryRouter>
    );

    // Click hamburger menu (only 1 button exists in DOM)
    const menuBtn = screen.getByRole('button');
    fireEvent.click(menuBtn);

    // Sidebar should now be in the document
    expect(screen.getByTestId('mobile-sidebar')).toBeInTheDocument();

    // Now click the overlay to close the sidebar
    const overlay = document.querySelector('.toggle-nav-overlay');
    fireEvent.click(overlay!);

    // Sidebar should disappear
    expect(screen.queryByTestId('mobile-sidebar')).not.toBeInTheDocument();
  });
});
