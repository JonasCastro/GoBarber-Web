import React from 'react';

import { render, fireEvent, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import Input from '../../components/Input';
import { useAuth, AuthProvider } from '../../hooks/auth';

describe('Auth hook', () => {
  it('should be able to sign in', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: 'johndoe@exemple.com.br',
      password: '123456',
    });
    expect(result.current.user.email).toEqual('johndoe@exemple.com.br');
  });
});
