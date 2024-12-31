import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import EmailForm from '@/components/ui/EmailForm';

describe('EmailForm', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('validates email input', async () => {
    render(<EmailForm />);
    
    const input = screen.getByPlaceholderText(/enter your email/i);
    
    // Change the input value
    fireEvent.change(input, { target: { value: 'invalid-email' } });
    
    // Wait for validation effect to run
    await waitFor(() => {
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    expect(screen.getByTestId('error-message')).toBeInTheDocument();
    expect(screen.getByTestId('error-message')).toHaveTextContent(/invalid email address/i);
    expect(fetch).not.toHaveBeenCalled();
  });

  it('submits form with valid email', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: 'Successfully joined! Check your email.' })
      })
    );

    render(<EmailForm />);
    
    const input = screen.getByPlaceholderText(/enter your email/i);
    const submitButton = screen.getByText(/join now/i);

    fireEvent.change(input, { target: { value: 'test@example.com' } });
    
    // Wait for validation to clear
    await waitFor(() => {
      expect(input).toHaveAttribute('aria-invalid', 'false');
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId('success-message')).toBeInTheDocument();
    });

    expect(screen.getByTestId('success-message')).toHaveTextContent(/successfully joined! check your email/i);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('handles API error response', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ error: 'Server error' })
      })
    );

    render(<EmailForm />);
    
    const input = screen.getByPlaceholderText(/enter your email/i);
    const submitButton = screen.getByText(/join now/i);

    fireEvent.change(input, { target: { value: 'test@example.com' } });
    
    // Wait for validation to clear
    await waitFor(() => {
      expect(input).toHaveAttribute('aria-invalid', 'false');
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId('error-message')).toBeInTheDocument();
    });

    expect(screen.getByTestId('error-message')).toHaveTextContent(/server error/i);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});