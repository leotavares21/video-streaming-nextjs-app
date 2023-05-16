import { act, renderHook } from '@testing-library/react';
import { useModal } from 'hooks/useModal';
import { expect, describe, it } from 'vitest';

describe('useModal hook', () => {
  it('returns default values', () => {
    const { result } = renderHook(() => useModal());
    expect(result.current.openModal).toBe(false);
  });

  it('opens and closes modal', () => {
    const { result } = renderHook(() => useModal());
    act(() => {
      result.current.setOpenModal(true);
    });
    expect(result.current.openModal).toBe(true);
    act(() => {
      result.current.closeModal();
    });
    expect(result.current.openModal).toBe(false);
  });
});
