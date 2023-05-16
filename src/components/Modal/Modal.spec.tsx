import { render, fireEvent } from '@testing-library/react';
import { expect, describe, it, vitest } from 'vitest';

import { Modal } from './Modal';

describe('<Modal/>', () => {
  it('renders correctly with title and content', () => {
    const { getByText } = render(
      <Modal title="Test Modal" isOpen={true} onClose={() => null}>
        <p>Test content</p>
      </Modal>
    );
    expect(getByText('Test Modal')).toBeInTheDocument();
    expect(getByText('Test content')).toBeInTheDocument();
  });

  it('closes when clicking close button', () => {
    const onClose = vitest.fn();
    const { getByLabelText } = render(
      <Modal title="Test Modal" isOpen={true} onClose={onClose}>
        <p>Test content</p>
      </Modal>
    );
    fireEvent.click(getByLabelText('Close'));
    expect(onClose).toHaveBeenCalled();
  });
});
