import { render, screen, fireEvent } from '@testing-library/react';

import { describe, expect, it } from 'vitest';
import Searchbar from '../../root/component/SearchBar';

describe('Searchbar Component', () => {
  it('allows typing in the input field', () => {
    render(<Searchbar />);

    const input = screen.getByPlaceholderText(/search for anything/i) as HTMLInputElement;
    
    // Simulate typing in the input field
    fireEvent.change(input, { target: { value: 'test search' } });
    
    // Ensure the value of the input field changes correctly
    expect((input as HTMLInputElement).value).toBe('test search');
  });
});
