import React, { useContext, useState } from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';


const Formulario = () => {

  const [busqueda, guardarBusqueda] = useState({ 
    nombre: "",
    categoria: ""
  });

  const { categorias } = useContext(CategoriasContext);
  const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);
  
  // Leer contenidos
  const obtenerDatosReceta = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return ( 
    <Container className="m-2">
      <Form
        onSubmit={e => {
          e.preventDefault();
          buscarRecetas(busqueda);
          guardarConsultar(true);
        }}
      >
        <Row className="mt-4">
          <Col md={6} sm={12}>
            <Form.Control size="sm" type="text"  className="form-control" name="nombre" placeholder="Buscar por ingrediente" onChange={obtenerDatosReceta}/>
          </Col>
          <Col md={5} sm={12}>
            <Form.Control size="sm" as="select" className="form-control" name="categoria" onChange={obtenerDatosReceta}>
            <option value="">-- Selecciona Categoria --</option>
                {categorias.map(categoria => (
                  <option 
                    key={categoria.strCategory}
                    value={categoria.strCategory}
                  >{categoria.strCategory}</option> 
                ))}
            </Form.Control>
          </Col>
          <Col md={1}>
            <Button size="sm" type="submit" disabled={!busqueda.categoria} variant="primary">Buscar</Button>
          </Col>
        </Row>
      </Form>
    </Container>
     );
}
 
export default Formulario;