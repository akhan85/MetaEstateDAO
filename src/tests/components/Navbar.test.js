import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '@/components/layout/Navbar';

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Community/i)).toBeInTheDocument();
    expect(screen.getByText(/Join Now/i)).toBeInTheDocument();
  });

  it('toggles mobile menu', () => {
    render(<Navbar />);
    const menuButton = screen.getByRole('button', { name: /open main menu/i });
    fireEvent.click(menuButton);
    // Add assertions for mobile menu state
  });
});