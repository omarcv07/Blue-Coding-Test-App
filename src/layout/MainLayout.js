import React from "react";
import { Container } from "@mui/system";

const MainLayout = ({ children }) => {
    return (
        <Container>
            {children}
        </ Container >
    )
}

export default MainLayout;