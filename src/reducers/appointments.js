import { CHOSE_APPOINTMENT } from "../actions/actionTypes";
import { SET_APPOINTMENTS } from "../actions/actionTypes";

const initialState = [];

const findAppointmentIndex = (state, empID, time, day) => {
  let appointment = state.filter(
    a => a.empID === empID && a.time === time && a.day === day
  )[0];
  return state.indexOf(appointment);
};

export const appointments = (state = initialState, action) => {
  // switch (action.type) {
  //   case CHOSE_APPOINTMENT:
  //     let newState = [ ...state ];
  //     const index = findAppointmentIndex(newState, action.payload.empID, action.payload.time, action.payload.day);
  //     newState[index].available = false;
  //     return newState;
  //   default:
  //     return state;
  // }
  let newState = [...state];
  if (action.type === CHOSE_APPOINTMENT) {
    const { empID, time, day } = action.payload;
    const index = findAppointmentIndex(newState, empID, time, day);
    newState[index].available = false;
    return newState;
  } else if (action.type === SET_APPOINTMENTS) {
    return [...newState, ...action.appointments];
  } else {
    return state;
  }
};
