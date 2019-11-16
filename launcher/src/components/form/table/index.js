import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });


export default function LaunchTable(props) {
    console.log(props.launchDetails);
    const classes = useStyles();
  
    return (
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Launch Window Start</TableCell>
              <TableCell align="right">Launch Window End</TableCell>
              <TableCell align="right">Rocket Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.launchDetails.map(launch => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {launch.name}
                </TableCell>
                <TableCell align="right">{launch.location.name}</TableCell>
                <TableCell align="right">{launch.windowStart}</TableCell>
                <TableCell align="right">{launch.windowEnd}</TableCell>
                <TableCell align="right">{launch.rocket.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    );
  }