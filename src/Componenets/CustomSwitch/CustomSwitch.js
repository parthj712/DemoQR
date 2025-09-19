// CustomSwitch.js
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const CustomSwitch = styled((props) => <Switch {...props} />)(({ theme }) => ({
    width: 56,
    height: 31,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        padding: 4,
        '&.Mui-checked': {
            transform: 'translateX(28px)',
            '& .MuiSwitch-thumb:before': {
                content: '"A"',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: '#fff',
        width: 24,
        height: 24,
        position: 'relative',
        '&:before': {
            content: '"अ"',
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 12,
            fontWeight: 600,
            color: "#A6421B",
        },
    },
    '& .MuiSwitch-track': {
        borderRadius: 20 / 2,
        backgroundColor: '#ccc',
        opacity: 1,
    },
}));

export default CustomSwitch;
