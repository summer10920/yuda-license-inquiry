import React, { createContext, useContext, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

interface SnackbarContextType {
  showSnackbar: (message: string, attr: 'success' | 'error' | 'warning' | 'info') => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; attr: 'success' | 'error' | 'warning' | 'info' }>({
    open: false,
    message: '',
    attr: 'info',
  });

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const showSnackbar = (message: string, attr: 'success' | 'error' | 'warning' | 'info') => {
    setSnackbar({ open: true, message, attr });
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}

      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.attr}
          variant="outlined"
          sx={{ width: '320px', display: 'flex', justifyContent: 'center' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>

    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};