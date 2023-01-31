import { Button, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import HistoryContext from "../../contexts/HistoryContext";
import DeleteIcon from '@mui/icons-material/Delete';
import MainLayout from "../../layout/MainLayout";

const classes = {
    historyText: {
        color: '#ffffff'
    }
}

const GifsHistory = () => {
    const navigate = useNavigate();
    const historyContext = useContext(HistoryContext);

    const deleteSearch = (index) => {
        const newGifsHistory = [...historyContext.gifHistory]
        newGifsHistory.splice(index, 1)
        historyContext.setGifHistory(newGifsHistory);
    }

    const displayGifsHistory = () => {
        if (historyContext.gifHistory.length > 0) {
            return historyContext.gifHistory.map((gif, key) => (
                <List key={key}>
                    <ListItem
                        secondaryAction={
                            <IconButton onClick={() => deleteSearch(key)} edge="end" aria-label="delete">
                                <DeleteIcon color="error" />
                            </IconButton>
                        }>
                        <ListItemText style={classes.historyText} primary={gif.title} />
                    </ListItem>
                </List>
            ))
        }

        return <Typography color={'white'}>No Results Found</Typography>
    }

    return (
        <MainLayout>
            <Button onClick={() => navigate('/gifs')} variant="contained">List</Button>
            {displayGifsHistory()}
        </ MainLayout>
    )
}

export default GifsHistory;