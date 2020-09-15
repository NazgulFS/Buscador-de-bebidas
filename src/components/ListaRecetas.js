import React, { useContext } from "react";
import Receta from "./Receta";
import { Row, Container } from 'react-bootstrap';
import { RecetasContext } from "../context/RecetasContext";

const ListaRecetas = () => {

  // Extraer las recetas
  const { recetas } = useContext(RecetasContext);

  return (
    <Container>
      <Row>
        {recetas.map((receta) => (
          <Receta key={receta.idDrink} receta={receta} />
        ))}
      </Row>
    </Container>
  );
};

export default ListaRecetas;