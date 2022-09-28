import { CssBaseline, ThemeProvider } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Toaster } from 'react-hot-toast'
import '@fontsource/kanit'

import { env } from './utils/env';
import { theme } from './utils/theme';
import { UserProfileProvider } from './context/useUserProfile';

import Layout from './components/base/Layout';
import Outlet from './components/pages/Outlet';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster />
      <UserProfileProvider>
        <GoogleOAuthProvider clientId={env.googleClientId}>
          <Layout>
            <Outlet />
          </Layout>
        </GoogleOAuthProvider>
      </UserProfileProvider>
    </ThemeProvider>
  );
}

export default App;
