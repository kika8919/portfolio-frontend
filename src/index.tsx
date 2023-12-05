import './wdyr';
import React from 'react';
import { createRoot } from 'react-dom/client';
import * as Sentry from '@sentry/browser';
import 'assets/styles/main.css';
import './index.css';

import { AppProviders } from 'providers/AppProviders';
import { AppRoutes } from 'routing/AppRoutes';

if (import.meta.env.VITE_SENTRY_DSN) {
  Sentry.init({ dsn: import.meta.env.VITE_SENTRY_DSN });
}

const container = document.getElementById('root');
const root = createRoot(container as Element);
root.render(
  <React.StrictMode>
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  </React.StrictMode>,
);
