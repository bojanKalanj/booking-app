import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Card } from '../ui/card';
import { ButtonGray } from '../ui/button';
import {choseAppointment, setAppointments} from '../actions';
import Select from '../ui/inputSelect';

const EmployeeCard = ({appointments, empID, name, day, choseAppointment, setAppointments}) => {
    const availableAppointments = appointments.filter(ap => ap.empID === empID && ap.day === day);
    
    let [shift, onValueSelected] = useState();

    // NEEDS REFACTORING!
    const getAllWorkingHours = (from = "08:30", to = "19:40") => {
        let allWorkinHours = [];
        const minutesPerApointment = 20;
        let firstHour = Number(from.slice(0, 2));
        const lastHour = Number(to.slice(0, 2));
        let lastMintes = Number(to.slice(3, 5));
        let firstMintes = Number(from.slice(3, 5));
        let n = firstHour;
        let minutes = firstMintes;
        let minutesToDisplay = '';
        for (firstHour; firstHour < lastHour; firstHour++) {
            for(let i = 0; i <= 60 / minutesPerApointment; i++){
                if(minutes >= 60){
                    minutes = minutes - 60;
                    n++;
                }
                if(n <= lastHour){
                    if(n === lastHour && minutes > lastMintes){
                        break
                }
                    minutes < 10? minutesToDisplay = `0${minutes}`: minutesToDisplay = minutes;
                    allWorkinHours.push(
                      `${n >= 10 ? n : `0${n}`}:${
                        minutesToDisplay !== 0
                          ? minutesToDisplay
                          : "00"
                      }`
                    );
                }
                minutes += minutesPerApointment;
            }
        }

        return allWorkinHours;
    };
    
    useEffect(()=> {
        console.log("shift changed, ", shift)
        switch(shift){
            case "first shift":
                let hours = getAllWorkingHours("08:00", "16:00");
                setAppointments(hours, empID, day);
                break;
            case "second shift":
                hours = getAllWorkingHours("16:00", "21:00");
                setAppointments(hours, empID, day);
                break;
            default: return
        }
    }, [shift]);

    return (
      <Card
        width="30%"
        margin={() => "margin-right: 20px; margin-top: 20px;"}
      >
        <h3>{name}</h3>
        {availableAppointments.map(appointment => {
          return (
            <ButtonGray
              width="19%"
              key={appointment.time}
              margin={() => "margin: 1px"}
              onClick={() => choseAppointment(appointment.time, empID, day)}
            >
              {appointment.time}
            </ButtonGray>
          );
        })}
        {!availableAppointments.length && <p>No available appointments</p>}
        {!availableAppointments.length && (
          <Select
            width="230px"
            list={["chose shift", "first shift", "second shift"]}
            onValueSelected={onValueSelected}
            />
        )}
      </Card>
    );
}

const mapStateToProps = ({ appointments }) => {
    return {
        appointments
    }
}

export default connect(
  mapStateToProps,
  { choseAppointment, setAppointments }
)(EmployeeCard);
