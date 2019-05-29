import React from 'react';
import { connect } from 'react-redux';

import { Card } from '../ui/card';
import { ButtonPink } from '../ui/button';
import {choseAppointment} from '../actions';

const employeeCard = ({appointments, empID, name, day, choseAppointment}) => {
    console.log(appointments);
    console.log("day: ", day);

    let availableAppointments = appointments.filter(ap => ap.empID === empID && ap.day === day);
    console.log("availableAppointments: ", availableAppointments);
    return (
      <Card
        width="30%"
        margin={() => "margin-right: 20px; margin-top: 20px;"}
      >
        <h3>{name}</h3>
        {availableAppointments.map(appointment => {
          return (
            <ButtonPink
              width="19%"
              key={appointment.time}
              margin={() => "margin: 1px"}
              onClick={() => choseAppointment(appointment.time, empID, day)}
            >
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

export default connect(mapStateToProps, { choseAppointment })(employeeCard);
