import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import { beforeEach, describe, expect, test, vi, Mock } from 'vitest';
import ProfileBottomNav from '../../root/component/ProfileBottomNav';

// Mock the useNavigate hook and preserve the BrowserRouter functionality
vi.mock('react-router-dom', async () => {
  const original = await import('react-router-dom');
  return {
    ...original,
    useNavigate: vi.fn(), // Mock useNavigate
  };
});

describe('ProfileBottomNav Component', () => {
  const mockNavigate = vi.fn();  // Create the mock function

  beforeEach(() => {
    // Mock the navigate function using vi.fn() and mockReturnValue
    (useNavigate as Mock).mockReturnValue(mockNavigate); 
  });

  test('renders all navigation items', () => {
    render(
      <Router>
        <ProfileBottomNav />
      </Router>
    );

    // Check if all navigation items are rendered
    const navItems = screen.getAllByText(/general details|documents|bank details|loans|app and system/i);
    expect(navItems).toHaveLength(5);
  });

  test('activates the correct item when clicked', () => {
    render(
      <Router>
        <ProfileBottomNav />
      </Router>
    );
  
    const navItems = screen.getAllByText(/general details|documents|bank details|loans|app and system/i);
    const firstItem = navItems[0];
    const secondItem = navItems[1];
  
    // Click on the first item
    fireEvent.click(firstItem);
    
    // Check if the first item is marked as active by checking the class name
    expect(firstItem.classList.contains('active')).toBe(true);
    expect(secondItem.classList.contains('active')).toBe(false);
  });

  test('navigates to the correct path when clicked', () => {
    render(
      <Router>
        <ProfileBottomNav />
      </Router>
    );

    const navItems = screen.getAllByText(/general details|documents|bank details|loans|app and system/i);
    const secondItem = navItems[1];

    // Simulate click on the second item
    fireEvent.click(secondItem);

    // Check if navigate was called with the correct path
    expect(mockNavigate).toHaveBeenCalledWith('/document');
  });
});
