import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function Vehicles({ list }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Brand</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Owner Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(car => (
            <TableRow key={car.id}>
              <TableCell component="th" scope="row">
                {car.id}
              </TableCell>
              <TableCell align="right">{car.brand}</TableCell>
              <TableCell align="right">{car.model}</TableCell>
              <TableCell align="right">{car.ownerId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

Vehicles.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/vehicles');
  const json = await res.json();

  return { list: json };
};
