import CssBaseline from '@mui/material/CssBaseline';
import { Grid2 } from '@mui/material';
import AppTheme from '../../shared-theme/AppTheme';
import SidePanel from './components/SidePanel/';
import MainForm from './components/MainForm';
import { SnackbarProvider } from '../Context/Snackbar';



export default function Inquiry(props: { disableCustomTheme?: boolean }) {

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <SnackbarProvider>
        <Grid2 container
          sx={{ minHeight: '100vh' }}
        >
          <SidePanel />
          <MainForm />
        </Grid2 >
      </SnackbarProvider>
    </AppTheme >
  );
}