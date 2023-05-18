import { render, screen, act } from '@testing-library/react';
import { expect, describe, it, beforeEach } from 'vitest';

const storeResetFns = new Set<() => void>();

import { Profile } from './Profile';

describe('Profile', () => {
  beforeEach(() => {
    act(() => storeResetFns.forEach((resetFn) => resetFn()));
  });
  it('should render user profile information when use is authenticated', () => {
    render(<Profile />);

    expect(screen.getByText('John Silva')).toBeVisible();
  });
});
