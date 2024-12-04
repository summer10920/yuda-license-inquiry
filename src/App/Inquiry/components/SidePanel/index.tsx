import Welcome from './Welcome';
import SiteMarkIcon from './SiteMarkIcon';
import { Box, Grid2 } from '@mui/material';

export default function SidePanel() {
  return <Grid2
    size={{ xs: 12, md: 4 }}
    sx={{
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      background: 'url(https://picsum.photos/600/1080/?random=10) no-repeat center/cover',
      borderRight: { sm: 'none', md: '1px solid' },
      borderColor: { sm: 'none', md: 'divider' },
      alignItems: 'start',
      p: { xs: 5, md: 10 },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fffc',
        backdropFilter: 'blur(3px)',
        zIndex: 1
      },
    }}
  >
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        gap: 4,
        zIndex: 2,
        flexDirection: 'column',
        flexGrow: 1,
        width: '100%',
        maxWidth: 500,
      }}
    >
      <SiteMarkIcon />
      <Welcome />
    </Box>
  </Grid2>
    ;
}