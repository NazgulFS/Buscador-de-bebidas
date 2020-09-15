import React from "react";
import { Col, Card } from 'react-bootstrap';
import ModalInfo from './Modal';

const Receta = ({ receta }) => {


    return(   
      <Col>
        <Card className="mt-4" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`}/>
          <Card.Body>
            <Card.Title>{receta.strDrink}</Card.Title>
            <ModalInfo className="align-content-center" receta={receta}/>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Receta;