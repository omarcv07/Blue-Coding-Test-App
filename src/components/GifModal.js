import React from 'react';
import { Box } from '@mui/material';
import { Gif } from '@giphy/react-components';

const classes = {
    container: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, .8)"
    }
}

const GifModal = ({ modalGif, setModalGif }) => {
    return modalGif &&
        <Box
            style={classes.container}
            onClick={(e) => {
                e.preventDefault();
                setModalGif(undefined);
            }}
        >
            <Gif gif={modalGif} width={200} />
        </Box>

}

export default GifModal