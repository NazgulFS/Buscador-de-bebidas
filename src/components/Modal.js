import React,{ useState, useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ModalContext } from "../context/ModalContext";
import '../styles/modal.css';

const ModalInfo = ({receta}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

     // Extraer los valores del context
    const { informacion, guardarIdReceta, guardarReceta } = useContext(
        ModalContext
    );

    // Muestra y formatea los ingredientes
    const mostrarIngredientes = (informacionIngredientes) => {
        let ingredientes = [];
        for (let i = 1; i < 16; i++) {
        if (informacionIngredientes[`strIngredient${i}`]) {
            ingredientes.push(
            <li>
                {informacionIngredientes[`strIngredient${i}`]}{" "}
                {informacionIngredientes[`strMeasure${i}`]}
            </li>
            );
        }
        }

        return ingredientes
    };

    return ( 
        
        <>
        <Button variant="outline-primary" onClick={() => {
              guardarIdReceta(receta.idDrink);
              guardarReceta({});
              handleShow();
        }}>Ver Receta</Button>

        <Modal
            show={show}
            onHide={() => {
                guardarIdReceta(null);
                handleClose();
              }}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>{informacion.strDrink}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 className="mt4">Instrucciones</h5>
                <p>{informacion.strInstructions}</p>
                <h5 className="mt4">Ingredientes</h5>
                <ul>{mostrarIngredientes(informacion)}</ul>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="outline-primary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        </>
     );
}
 
export default ModalInfo;