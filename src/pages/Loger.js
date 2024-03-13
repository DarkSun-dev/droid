
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { LinearProgress } from '@material-ui/core';

function TypographyDemo(props) {

    const { loading = false } = props;

    return (
        <div>
            <Typography component="div">
                {loading ? 'LOADING PAGE' : 'LOADING PAGE'}
            </Typography>
        </div>
    );
}

TypographyDemo.propTypes = {
    loading: PropTypes.bool,
}

export default function Loger({ text }) {
    return (
        <div>
         <TypographyDemo></TypographyDemo>
         <span style={{textAlign: 'center'}}>A carregar...</span>
        </div>
    )
}