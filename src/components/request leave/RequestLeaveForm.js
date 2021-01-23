import React from "react";
import PropTypes from "prop-types";
import { Form, Container, Row, Col, Button, Alert } from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

const RequestLeaveForm = ({
  requestLeave,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  registerLocale("es", es);

  return (
    <Container className="my-2">
      {errors.onSave && <Alert variant="danger">{errors.onSave}</Alert>}
      <Row className="justify-content-md-center">
        <Col>
          <Form className="p-2" onSubmit={onSave}>
            <h3>Solicitar licencia</h3>
            <hr />
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Nombre"
                value={requestLeave.name}
                onChange={onChange}
                isInvalid={errors.name}
                isValid={!errors.name && requestLeave.name}
                disabled={saving}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Licencia</Form.Label>
              <div className="m-1">
                <DatePicker
                  name="startDate"
                  dateFormat="dd/MM/yyyy"
                  selected={requestLeave.startDate}
                  minDate={new Date()}
                  onChange={onChange}
                  startDate={requestLeave.startDate}
                  endDate={requestLeave.endDate}
                  selectsRange
                  inline
                  locale="es"
                ></DatePicker>
                <div className={errors.startDate ? "invalid" : "hidden"}>
                  {errors.startDate}
                </div>
              </div>
            </Form.Group>
            <Button type="submit">{saving ? "Enviando..." : "Enviar"}</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

RequestLeaveForm.propTypes = {
  requestLeave: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};
export default RequestLeaveForm;
