import { render, screen } from '@testing-library/react';
import { ButtonTheme, Button } from './Button';

describe('Button', () => {
    test('test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('test clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        // screen.debug();
    });
});
