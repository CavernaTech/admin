import { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Checkbox,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControlLabel,
    Paper,
    Typography
} from '@mui/material';
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
    const [keep, setKeep] = useState(false);

    const handleKeep = () => setKeep(!keep);

    const handleSubmit = (e) => {
        e.preventDefault();
        login(keep).then((status) => {
            if (status) navigate(-1);
        });
    };

    return (
        <Paper className={classes.paper} elevation={5}>
            <DialogTitle>Autenticação de Acesso</DialogTitle>
            <DialogContent>
                <DialogContentText>É necessário login para acessar a ferramenta</DialogContentText>
                <FormControlLabel
                    checked={keep}
                    control={<Checkbox />}
                    label={<Typography variant="body1">Manter-me conectado</Typography>}
                    onChange={handleKeep}
                />
            </DialogContent>
            <DialogActions>
                <Button color="primary" fullWidth variant="outlined" startIcon={<Google />} onClick={handleSubmit}>
                    Login
                </Button>
            </DialogActions>
        </Paper>
    );
}

LoginPage.propTypes = {
    login: PropTypes.func.isRequired
};

export default LoginPage;
