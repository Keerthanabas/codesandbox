import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import React from 'react';

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
root.render(
<React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
)