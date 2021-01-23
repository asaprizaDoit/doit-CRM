import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RequestLeaveForm from "./RequestLeaveForm";
import * as RequestLeaveActions from "../../redux/actions/requestLeaveActions";
import { newRequestLeave } from "../../../tools/mockData";
import { toast } from "react-toastify";

const SendRequestLeave = ({ saveRequestLeave, ...props }) => {
  const [requestLeave, setRequestLeave] = useState({ ...props.requestLeave });
  const [errors, setErrors] = useState({});
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    if (!firstTime) formIsValid();
    setFirstTime(false);
  }, [requestLeave.name]);

  function handleChange(event) {
    if (event.target) {
      const { name, value } = event.target;
      setRequestLeave((prevRequestLeave) => ({
        ...prevRequestLeave,
        [name]: value,
      }));
    } else {
      setRequestLeave((prevRequestLeave) => ({
        ...prevRequestLeave,
        ["startDate"]: event[0],
        ["endDate"]: event[1],
      }));
    }
  }

  function formIsValid() {
    const { name, startDate, endDate } = requestLeave;
    const errors = {};

    if (!name) errors.name = "Por favor ingrese un nombre";

    if (!startDate)
      errors.startDate = "Por favor ingrese una fecha no anterior a la de hoy ";

    if (!endDate)
      errors.endDate =
        "Por favor ingrese una fecha mayor o igual a la de inicio";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    saveRequestLeave(requestLeave)
      .then(() => {
        toast.success("Solicitud de licencia enviada.");
      })
      .catch((error) => {
        setErrors({ onSave: error.message });
      });
  }

  return (
    <>
      <RequestLeaveForm
        requestLeave={requestLeave}
        errors={errors}
        onSave={handleSave}
        onChange={handleChange}
        saving={props.loading}
      />
    </>
  );
};

SendRequestLeave.propTypes = {
  requestLeave: PropTypes.object.isRequired,
  saveRequestLeave: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    requestLeave: newRequestLeave,
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  saveRequestLeave: RequestLeaveActions.saveRequestLeave,
};

export default connect(mapStateToProps, mapDispatchToProps)(SendRequestLeave);
