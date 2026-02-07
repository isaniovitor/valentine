import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ValentinePrompt } from '../components/ValentinePrompt';

describe('ValentinePrompt', () => {
  it('renders yes and no buttons', () => {
    render(<ValentinePrompt onYes={() => {}} />);
    expect(screen.getByRole('button', { name: /yes/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /no/i })).toBeInTheDocument();
  });

  it('calls onYes callback when yes button clicked', async () => {
    const user = userEvent.setup({ delay: null });
    const onYes = vi.fn();
    render(<ValentinePrompt onYes={onYes} />);

    const yesButton = screen.getByRole('button', { name: /yes/i });
    await user.click(yesButton);

    await new Promise(resolve => setTimeout(resolve, 600));
    expect(onYes).toHaveBeenCalled();
  });

  it('renders prompt text', () => {
    render(<ValentinePrompt onYes={() => {}} />);
    expect(screen.getByText(/will you be my valentine/i)).toBeInTheDocument();
  });

  it('displays hint text for no button', () => {
    render(<ValentinePrompt onYes={() => {}} />);
    expect(screen.getByText(/try clicking/i)).toBeInTheDocument();
  });

  it('renders decorative elements', () => {
    const { container } = render(<ValentinePrompt onYes={() => {}} />);
    const decorativeElements = container.querySelectorAll('[class*="absolute"]');
    expect(decorativeElements.length).toBeGreaterThan(0);
  });
});
