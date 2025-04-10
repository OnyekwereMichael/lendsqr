import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter for testing

import { User } from '../../lib/types'; // Adjust the import path as necessary
import { describe, expect } from 'vitest';
import { IMAGES } from '../../assets/images';
import Profileheader from '../../root/component/Profileheader';
import { it } from 'vitest';
import '@testing-library/jest-dom'; 

// Create a mock User object for testing
const mockUser: User = {
    name: 'John Doe',
    code: '12345',
    accountNumber: 9876543210,
    id: 0,
    email: '',
    phone: '',
    organization: '',
    dateJoined: '',
    maritalStatus: '',
    profileImage: '',
    userTier: '',
    rating: '',
    accountBalance: 0,
    bank: '',
    monthlyIncome: 0,
    education: '',
    employmentStatus: false,
    loanRepayment: 0,
    twitter: '',
    facebook: '',
    linkedin: '',
    children: false,
    TOR: '',
    BVN: '',
    Gender: '',
    SOE: '',
    officeemail: '',
    L0E: '',
    EmploymentStatus: '',
    GurantorEmail: '',
    GurantorName: '',
    GurantorPhone: '',
    Married: ''
};

describe('Profile Header Component', () => {
    
it('displays the user name and code correctly', () => {
    render(
      <MemoryRouter>
        <Profileheader data={mockUser} />
      </MemoryRouter>
    );
  
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('12345LZXD')).toBeInTheDocument();
  });

  it('displays the account number and bank name correctly', () => {
    render(
      <MemoryRouter>
        <Profileheader data={mockUser} />
      </MemoryRouter>
    );
  
    expect(screen.getByText('9876543210' + '00, 000')).toBeInTheDocument();
    expect(screen.getByText('9912345678/Providus Bank')).toBeInTheDocument();
  });

  
})
  