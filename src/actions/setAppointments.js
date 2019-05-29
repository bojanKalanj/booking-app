import { SET_APPOINTMENTS } from "./actionTypes";

export const setAppointments = (hours, empID, day) => {
  let appointments = [];
  hours.map(h => {
    appointments.push({ empID: empID, time: h, available: true, day: day });
  });
  return {
    type: SET_APPOINTMENTS,
    appointments
  };
};
