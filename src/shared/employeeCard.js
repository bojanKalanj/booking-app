import React from 'react';
import { connect } from 'react-redux';

import { Card } from '../ui/card';
import { ButtonPink } from '../ui/button';

const employeeCard = ({appointments, empID, name, day}) => {
    let availableAppointments = appointments.filter(ap => ap.empID === empID && ap.day === day);
    return (
      <Card
        width="30%"
        margin={() => "margin-right: 20px; margin-top: 20px;"}
      >
        <h3>{name}</h3>
        {availableAppointments.map(appointment => {
          return (
            <ButtonPink key={appointment.time} margin={() => "margin: 2px"}>
              {appointment.time}
            </ButtonPink>
          );
        })}
      </Card>
    );
}

const mapStateToProps = ({ appointments }) => {
    return {
        appointments
    }
}

export default connect(mapStateToProps)(employeeCard);
