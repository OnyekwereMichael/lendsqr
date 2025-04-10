import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { GetAllUsers } from '../../lib/query';

import { generateStatus } from '../../lib/GenerateStatus/GenerateStatus';
import { BrowserRouter as Router } from 'react-router-dom'; // We wrap it with Router because of the Link component
import Table from '../../root/component/Table';
import { Mock } from 'vitest';

vi.mock('../../lib/query', () => ({
  GetAllUsers: vi.fn(),
}));

vi.mock('../../lib/GenerateStatus/GenerateStatus', () => ({
  generateStatus: vi.fn(() => 'active'),
}));

describe('Table Component', () => {
  const mockUsers = [
    {
      id: 1,
      organization: 'Company A',
      name: 'User One',
      email: 'userone@example.com',
      phone: '1234567890',
      dateJoined: '2022-01-01',
    },
    {
      id: 2,
      organization: 'Company B',
      name: 'User Two',
      email: 'usertwo@example.com',
      phone: '0987654321',
      dateJoined: '2022-02-01',
    },
  ];

  beforeEach(() => {
    (GetAllUsers as Mock).mockReturnValue({ data: mockUsers, isLoading: false, isError: false });
    // Mocking generateStatus to return 'active' by default
  });

  it('renders the table with user data', async () => {
    render(
      <Router>
        <Table />
      </Router>
    );

    // Check if user data is present in the document
    expect(screen.getByText('USERNAME')).toBeDefined(); // Check if the header is rendered
    expect(screen.getByText('User One')).toBeDefined(); // Check if the first user name is rendered
    expect(screen.getByText('User Two')).toBeDefined(); // Check if the second user name is rendered
  });

  it('shows a loading spinner when data is loading', () => {
    (GetAllUsers as Mock).mockReturnValue({ data: [], isLoading: true, isError: false });

    render(
      <Router>
        <Table />
      </Router>
    );

    // Check if the spinner is rendered during loading state
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeDefined(); // Expect spinner to be present in the document
  });

  it('shows an error message when data fetch fails', () => {
    (GetAllUsers as Mock).mockReturnValue({ data: [], isLoading: false, isError: true });

    render(
      <Router>
        <Table />
      </Router>
    );

    expect(screen.getByText('Error loading users')).toBeDefined(); // Check for error message
  });

  it('toggles the filter form when filter icon is clicked', () => {
    render(
      <Router>
        <Table />
      </Router>
    );

    const filterIcon = screen.getAllByRole('img')[0]; // Assuming the filter icons are <img> elements
    fireEvent.click(filterIcon);

    expect(screen.getByText('Organization')).toBeDefined(); // Check if filter form appears
  });



  it('paginates correctly', async () => {
    render(
      <Router>
        <Table />
      </Router>
    );
  
    const nextButton = screen.getByRole('button', { name: /next/i });
    const prevButton = screen.getByRole('button', { name: /previous/i });
  
    fireEvent.click(nextButton);
    await waitFor(() => {
      expect(screen.getByText('User Two')).toBeDefined(); // Check that next page shows user two
    });
  
    fireEvent.click(prevButton);
    await waitFor(() => {
      expect(screen.getByText('User One')).toBeDefined(); // Check that previous page shows user one
    });
  });
});
