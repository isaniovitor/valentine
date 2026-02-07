import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QuestionCard } from '../components/QuestionCard';

describe('QuestionCard', () => {
  it('renders question text', () => {
    render(
      <QuestionCard designVariant="gradient-rose" questionText="What is your favorite color?">
        <div>Test content</div>
      </QuestionCard>
    );
    expect(screen.getByText('What is your favorite color?')).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(
      <QuestionCard designVariant="gradient-rose" questionText="Test question">
        <button type="button">Test button</button>
      </QuestionCard>
    );
    expect(screen.getByRole('button', { name: /test button/i })).toBeInTheDocument();
  });

  it('applies design variant styling', () => {
    const { container } = render(
      <QuestionCard designVariant="gradient-rose" questionText="Test">
        <div>Content</div>
      </QuestionCard>
    );
    const cardElement = container.querySelector('[class*="from-rose"]');
    expect(cardElement).toBeInTheDocument();
  });

  it('applies different design variant', () => {
    const { container } = render(
      <QuestionCard designVariant="romantic-purple" questionText="Test">
        <div>Content</div>
      </QuestionCard>
    );
    const cardElement = container.querySelector('[class*="from-purple"]');
    expect(cardElement).toBeInTheDocument();
  });
});
