import React from 'react';
import cars from '../cars.json';
import { Container, Paper, Chip, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    root: {
      display: 'flex',
      height: '230px',
      maxWidth: '420px',
      flexWrap: 'wrap',
      flexDirection: 'column',
      '& > *': {
        margin: theme.spacing(0.1),
      },
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      padding: '20px',
    },
    container: {
        display: 'flex',
        margin: '40px',
        justifyContent: 'center',
        alignItems: 'center'
    },
    chips: {
        marginTop: '20px',
        paddingLeft: '5px'
    }
  }));

const Car = (props) => {
    const classes = useStyles();
    let id = Number(props.match.params.id);
    let thisCar = cars.find(thisCar => thisCar.id === id);
        
    console.log(thisCar);

    return (
        <div className={classes.main}>
            <Container className={classes.container}>
                <Paper className={classes.root}>
                <h2>{thisCar.Name}</h2>
                <div className={classes.chips}>
                    <Chip label={`id: ${thisCar.id}`} />
                    <Chip label={`Name: ${thisCar.Name}`} />
                    <Chip label={`Miles_per_Gallon: ${thisCar.Miles_per_Gallon}`} />
                    <Chip label={`Cylinders: ${thisCar.Cylinders}`} />
                    <Chip label={`Displacement: ${thisCar.Displacement}`} />
                    <Chip label={`Horsepower: ${thisCar.Horsepower}`} />
                    <Chip label={`Weight_in_lbs: ${thisCar.Weight_in_lbs}`} />
                    <Chip label={`Acceleration: ${thisCar.Acceleration}`} />
                    <Chip label={`Year: ${thisCar.Year}`} />
                    <Chip label={`Origin: ${thisCar.Origin}`} />
                </div>
                </Paper>
            </Container>
        </div>
    )
}

export default Car