import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('page', () => {
  it('should render', () => {
    render(<Home />);
    expect(screen.getByText('src/app/page.tsx').innerHTML).toBe('src/app/page.tsx');
  });
});
