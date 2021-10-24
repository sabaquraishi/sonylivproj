import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        color: 'grey',
        textAlign: 'right'
    },
}));

export default function TypographyAlign() {
    const classes = useStyles();

    return <div className={classes.root}>{"-"}</div>;
}