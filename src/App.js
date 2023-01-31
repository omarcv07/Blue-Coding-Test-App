import React from "react";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";

// Contexts
import { HistoryContextProvider } from "./contexts/HistoryContext";

// Layouts
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <HistoryContextProvider>
        <AppRouter />
      </HistoryContextProvider>
    </BrowserRouter>
  );
}

export default App;
