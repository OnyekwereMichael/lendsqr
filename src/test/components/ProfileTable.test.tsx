import '@testing-library/jest-dom'; 
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import ProfileTable from '../../root/component/ProfileTable';
import { User } from '../../lib/types';

// Mock user data
const mockUserData: User = {
    email: 'test@example.com',
    name: 'John Doe',
    BVN: '123456789',
    Gender: 'Male',
    maritalStatus: 'Single',
    children: true,
    TOR: 'Owned',
    L0E: 'Bachelor',
    dateJoined: '2021-06-01',
    EmploymentStatus: 'Employed',
    officeemail: 'johndoe@company.com',
    loanRepayment: 20,
    facebook: 'john.doe.fb',
    linkedin: 'john.doe.linkedin',
    twitter: 'john.doe.twitter',
    GurantorName: 'Jane Doe',
    GurantorPhone: '1234567890',
    GurantorEmail: 'janedoe@example.com',
    Married: 'Sister',
    id: 0,
    phone: '',
    organization: '',
    profileImage: '',
    userTier: '',
    rating: '',
    accountBalance: 0,
    accountNumber: 0,
    bank: '',
    monthlyIncome: 0,
    education: '',
    employmentStatus: false,
    SOE: '',
    code: ''
};

describe('ProfileTable Component', () => {
  test('renders all profile sections', () => {
    render(<ProfileTable data={mockUserData} />);

    expect(screen.getByText(/personal info/i)).toBeInTheDocument();
    expect(screen.getByText(/education and employment/i)).toBeInTheDocument();
    expect(screen.getByText(/social info/i)).toBeInTheDocument();
    expect(screen.getByText(/guarantor/i)).toBeInTheDocument();
  });

  test('renders loan repayment with suffix correctly', () => {
    render(<ProfileTable data={mockUserData} />);
    expect(screen.getByText(mockUserData.loanRepayment + '00, 000')).toBeInTheDocument();
  });


  test('renders sector of employment correctly', () => {
    render(<ProfileTable data={mockUserData} />);
    expect(screen.getByText(mockUserData.dateJoined)).toBeInTheDocument(); 
  });



  test('renders marital status correctly', () => {
    render(<ProfileTable data={mockUserData} />);
    expect(screen.getByText(String(mockUserData.maritalStatus))).toBeInTheDocument();
  });

  test('renders type of residence correctly', () => {
    render(<ProfileTable data={mockUserData} />);
    expect(screen.getByText(mockUserData.TOR)).toBeInTheDocument();
  });

  test('renders employment status correctly', () => {
    render(<ProfileTable data={mockUserData} />);
    expect(screen.getByText(mockUserData.EmploymentStatus)).toBeInTheDocument();
  });

  test('renders gender correctly', () => {
    render(<ProfileTable data={mockUserData} />);
    expect(screen.getByText(mockUserData.Gender)).toBeInTheDocument();
  });

  test('renders guarantor email address correctly', () => {
    render(<ProfileTable data={mockUserData} />);
    expect(screen.getByText(mockUserData.GurantorEmail)).toBeInTheDocument();
  });

  test('renders user name correctly', () => {
    render(<ProfileTable data={mockUserData} />);
    expect(screen.getByText(mockUserData.name)).toBeInTheDocument();
  });

  test('renders BVN correctly', () => {
    render(<ProfileTable data={mockUserData} />);
    expect(screen.getByText(mockUserData.BVN)).toBeInTheDocument();
  });

  test('renders guarantor phone number correctly', () => {
    render(<ProfileTable data={mockUserData} />);
    expect(screen.getByText(mockUserData.GurantorPhone)).toBeInTheDocument();
  });
});
