import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper } from '@mui/material';
import { Google } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    paper: {
        minHeight: '20vh',
        minWidth: '25vw',
        position: 'absolute',
        top: '40vh',
        left: '37.5vw',
        display: 'block'
    }
}));

function LoginPage() {
    const classes = useStyles();
    return (
        <Paper className={classes.paper} elevation={5}>
            <DialogTitle>Autenticação de Acesso</DialogTitle>
            <DialogContent>
                <DialogContentText>É necessário login para acessar a ferramenta</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="primary" fullWidth variant="outlined" startIcon={<Google />}>
                    Login
                </Button>
            </DialogActions>
        </Paper>
    );
}

export default LoginPage;
