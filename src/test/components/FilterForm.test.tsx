import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import FilterForm from '../../root/component/Filterform';

describe('FilterForm', () => {
  const mockSetFilters = vi.fn();
  const mockOnSubmit = vi.fn();
  const mockOnReset = vi.fn();

  const defaultFilters = {
    organization: '',
    username: '',
    email: '',
    date: '',
    phone: '',
    status: '',
  };

  const organizations = ['Org1', 'Org2', 'Org3'];

  beforeEach(() => {
    render(
      <FilterForm
        filters={defaultFilters}
        setFilters={mockSetFilters}
        onSubmit={mockOnSubmit}
        onReset={mockOnReset}
        organizations={organizations}
      />
    );
  });

  it('should call onSubmit when the submit button is clicked', () => {
    fireEvent.click(screen.getByText(/filter/i));  // Clicking the "Filter" button should trigger the onSubmit callback
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });
  it('should call onReset when the reset button is clicked', () => {
    fireEvent.click(screen.getByText(/reset/i));
    expect(mockOnReset).toHaveBeenCalledTimes(1);
  });

  
});
