import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  test('Test render', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Test clear theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>123</Button>);
    expect(screen.getByText('123')).toHaveClass('clear');
  });
});
