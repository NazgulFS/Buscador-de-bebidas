import React from 'react';
import '../src/components/app.css';
import Formulario from './components/Formulario';
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider from './context/ModalContext';
import { Row, Container } from 'react-bootstrap';
import ListaRecetas from "./components/ListaRecetas";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Container>
            <Row>
              <Container className="titulo">
                <h1 className="mt-4">BUSCADOR DE BEBIDAS</h1>
              </Container>
            </Row>
            <Row>
            </Row>
            <Row>
              <Formulario />
            </Row>
            <Row>
              <ListaRecetas />
            </Row>
          </Container>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
