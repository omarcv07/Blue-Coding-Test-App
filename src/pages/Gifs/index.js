import React, { useContext, useState } from "react";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import GifModal from "../../components/GifModal";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HistoryContext from "../../contexts/HistoryContext";

const giphyApiKey = new GiphyFetch("jTAuqirruj85Vtd9DISWXopoSqNOHRUG");

const GifsPage = () => {
    const navigate = useNavigate()
    const historyContext = useContext(HistoryContext);
    const [modalGif, setModalGif] = useState();

    const fetchGifs = (offset) => giphyApiKey.trending({ offset, limit: 10 });

    const onGifClick = (gif, e) => {
        e.preventDefault();

        setModalGif(gif)
        historyContext.setGifHistory([...historyContext.gifHistory, gif]);
    }

    return (
        <>
            <Button onClick={() => navigate('/history')} variant="contained">History</Button>
            <Grid onGifClick={onGifClick} width={window.innerWidth} gutter={6} columns={3} fetchGifs={fetchGifs} />
            <GifModal modalGif={modalGif} setModalGif={setModalGif} />
        </>
    );
};

export default GifsPage;
