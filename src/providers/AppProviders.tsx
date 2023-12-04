import { BrowserRouter as Router } from 'react-router-dom';

import { LocaleContextController } from 'context/locale/localeContextController/LocaleContextController';
import { AuthContextController } from 'context/auth/authContextController/AuthContextController';
import { ApiClientContextController } from '../context/apiClient/apiClientContextController/ApiClientContextController';
import { NextUIProvider } from '@nextui-org/react';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <NextUIProvider>
    <LocaleContextController>
      <ApiClientContextController>
        <AuthContextController>
          <Router>{children}</Router>
        </AuthContextController>
      </ApiClientContextController>
    </LocaleContextController>
  </NextUIProvider>
);
