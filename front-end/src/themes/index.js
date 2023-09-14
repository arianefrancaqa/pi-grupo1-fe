import { createTheme } from '@mui/material';
import { pink } from '@mui/material/colors';

export const StandardTheme = createTheme({
    palette: {
        primary: {
            main: pink[700],
            dark: pink[800],
            light: pink[100],
            
            contrastText: '#ffffff',
        },
        

    }
});