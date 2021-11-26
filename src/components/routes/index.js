import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "../../view/Main";
import { ModalWindow } from "../ModalWindow";

export const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/create" element={<ModalWindow />} />
          <Route path="/edit/:id" element={<ModalWindow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
