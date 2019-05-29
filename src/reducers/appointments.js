import { CHOSE_APPOINTMENT } from "../actions/actionTypes";

const initialState = [
    { empID: 1, time: "08:00", available: true, day: "monday" },
    { empID: 1, time: "09:00", available: true, day: "monday" },
    { empID: 1, time: "10:00", available: true, day: "monday" },
    { empID: 1, time: "11:00", available: true, day: "monday" },
    { empID: 1, time: "12:00", available: true, day: "monday" },
    { empID: 1, time: "13:00", available: true, day: "monday" }    
];

const findAppointmentIndex = (state, empID, time, day) => {
    let appointment = state.filter(
      a => a.empID === empID && a.time === time && a.day === day
    )[0];
    return state.indexOf(appointment);
}

export const appointments = (state = initialState, action) => {
    switch (action.type) {
      case CHOSE_APPOINTMENT:
        let newState = [ ...state ];
        const index = findAppointmentIndex(newState, action.payload.empID, action.payload.time, action.payload.day);
        newState[index].available = false;
        return newState;
      default:
        return state;
    }
};
  