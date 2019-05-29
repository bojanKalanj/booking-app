import React, { useState } from "react";
import { connect } from "react-redux";
import syled from "styled-components";

import EmployeeCard from "../shared/employeeCard";
import Select from "../ui/inputSelect";

const Home = ({ employees }) => {
  const setToday = () => {
    switch (new Date().getDay()) {
      case 0:
        return "sunday";
      case 1:
        return "monday";
      case 2:
        return "tuesday";
      case 3:
        return "wednesday";
      case 4:
        return "thursday";
      case 5:
        return "friday";
      default:
        return "saturday";
    }
  };

  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
  ];

  let [selectedDay, onValueSelected] = useState(setToday());

  return (
    <HomeWrap>
      <Select
        width="230px"
        list={days}
        onValueSelected={onValueSelected}
        selected={setToday()}
      />
      <div>
        {employees.map(emp => {
          return (
            <EmployeeCard
              key={emp.id}
              empID={emp.id}
              name={emp.name}
              day={selectedDay}
            />
          );
        })}
      </div>
    </HomeWrap>
  );
};

const HomeWrap = syled.div`
    display: flex;
    flex-direction: column;
`;

const mapStateToProps = ({ employees }) => {
  return {
    employees
  };
};

export default connect(mapStateToProps)(Home);
