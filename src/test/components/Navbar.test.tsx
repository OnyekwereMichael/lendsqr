import { it, expect, describe, vi, beforeEach } from 'vitest'
import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../../root/component/Navbar'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../../lib/context/AuthContext'

// Mock the dependencies
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useLocation: vi.fn()
  }
})

vi.mock('../../lib/context/AuthContext', () => ({
  useAuth: vi.fn()
}))

vi.mock('../../components/SearchBar', () => ({
  default: () => <div data-testid="search-bar">Search Bar</div>
}))

vi.mock('../../components/MobileSidbar', () => ({
  default: () => <div data-testid="mobile-sidebar">Mobile Sidebar</div>
}))

vi.mock('../../lib/GetInit', () => ({
  getInitials: vi.fn().mockReturnValue('TE')
}))

describe('Navbar', () => {
    beforeEach(() => {
        // Reset mocks before each test
        vi.mocked(useLocation).mockReturnValue({
          pathname: '/dashboard',
          search: '',
          hash: '',
          state: null,
          key: 'default',
        });
        
        vi.mocked(useAuth).mockReturnValue({
          currentUser: {
              email: 'test@example.com',
              emailVerified: true,
              isAnonymous: false,
              metadata: {},
              providerData: [],
              refreshToken: '',
              tenantId: null,
              uid: '12345',
              delete: vi.fn(), // Mocking the missing methods
              getIdToken: vi.fn().mockResolvedValue('mocked-id-token'),
              getIdTokenResult: vi.fn().mockResolvedValue({}),
              reload: vi.fn(),
              toJSON: vi.fn().mockReturnValue({}),
              displayName: null,
              phoneNumber: null,
              photoURL: null,
              providerId: ''
          },
          login: vi.fn(),
          logout: vi.fn(),
          signup: vi.fn(),
          loading: false,
          isAuthenticated: true, // Added the missing property
        });

      });         it('should not render on auth pages', () => {
    vi.mocked(useLocation).mockReturnValue({
      pathname: '/sign-up',
      search: '',
      hash: '',
      state: null,
      key: 'default'
    })

    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
    
    expect(container.firstChild).toBeNull()
  })

  it('should render docs link and user initials in the navbar', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  
    // Check for Docs link
    const docsLink = screen.getByText('Docs');
    expect(docsLink).toBeInTheDocument();
    expect(docsLink.tagName.toLowerCase()).toBe('a');
    expect(docsLink).toHaveClass('docs');
  
    // Check for user initials (should render 'TE' for 'test@example.com')
    const userInitials = screen.getByText('TE');
    expect(userInitials).toBeInTheDocument();
  
    // Check for user email truncated to first 8 characters
    const userName = screen.getByText('test@exa');
    expect(userName).toBeInTheDocument();
  });
  
  it('should not render navbar on the root and sign-up pages', () => {
    vi.mocked(useLocation).mockReturnValue({
      pathname: '/sign-up',
      search: '',
      hash: '',
      state: null,
      key: 'default'
    });
  
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  
    expect(container.firstChild).toBeNull();
  });

  it('should render logo and hamburger menu on mobile view', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  
    // Check that the logo is rendered
    const logo = screen.getByAltText('Home');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass('Logo');
  
    // Check that the hamburger menu button is rendered
    const hamburgerMenuButton = screen.getByRole('button');
    expect(hamburgerMenuButton).toBeInTheDocument();
  });
  
  
})
