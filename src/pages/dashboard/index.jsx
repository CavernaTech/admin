import { Container, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import ContatoModel from 'models/contato.model';
import PropTypes from 'prop-types';

function DashboardPage({ rows }) {
    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell align="right">Data</TableCell>
                            <TableCell align="right">E-mail</TableCell>
                            <TableCell align="right">Telefone</TableCell>
                            <TableCell align="right">Assunto</TableCell>
                            <TableCell align="right">Mensagem</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.agreement.toLocaleString()}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.tel}</TableCell>
                                <TableCell align="right">{row.subject}</TableCell>
                                <TableCell align="right">{row.message}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

DashboardPage.defaultProps = {
    rows: []
};

DashboardPage.propTypes = {
    rows: PropTypes.arrayOf(PropTypes.instanceOf(ContatoModel))
};

export default DashboardPage;
