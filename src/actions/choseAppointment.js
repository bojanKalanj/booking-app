import { CHOSE_APPOINTMENT } from "./actionTypes";

export const choseAppointment = (time, empID, day) => {
    return{
        type: CHOSE_APPOINTMENT,
        payload:{
            time,
            empID,
            day
        }
    }
}