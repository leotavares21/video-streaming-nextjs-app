import { render, screen, fireEvent } from '@testing-library/react';

import Home from 'pages';

describe('HomePage', () => {
  it('renders videos', () => {
    render(<Home />);
    const container = screen.getByTestId('videos-container');
    expect(container.children.length).toBeGreaterThan(0);
  });

  it('changes tab state on click', () => {
    render(<Home />);
    const tab1 = screen.getByTestId('tabActivation');
    const tab2 = screen.getByTestId('tabActivation2');

    expect(tab1.classList.contains('text-secondary')).toBe(true);

    // simula um clique na tab2
    fireEvent.click(tab2);

    // Verifica se tab2 está com a class text-secondary e tab1 não
    expect(tab1.classList.contains('text-secondary')).toBe(false);
    expect(tab2.classList.contains('text-secondary')).toBe(true);
  });
});
