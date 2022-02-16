import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper } from '@mui/material';
import { Google } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    paper: {
        minHeight: '20vh',
        minWidth: '25vw',
        position: 'absolute',
        top: '40%',
        left: '37.5%',
        display: 'block'
    }
}));

function LoginPage({ login }) {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login().then((status) => {
            if (status) navigate(-1);
        });
    };

    return (
        <Paper className={classes.paper} elevation={5}>
            <DialogTitle>Autenticação de Acesso</DialogTitle>
            <DialogContent>
                <DialogContentText>É necessário login para acessar a ferramenta</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="primary" fullWidth variant="outlined" startIcon={<Google />} onClick={handleSubmit}>
                    Login
                </Button>
            </DialogActions>
        </Paper>
    );
}

export default LoginPage;
