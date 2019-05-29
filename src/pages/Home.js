import React from 'react';
import { connect } from 'react-redux';

import EmployeeCard from '../shared/employeeCard';

const Home = ({ employees }) => {
    console.log(employees)
    return (
      <div>
        {employees.map(emp => {
          return <EmployeeCard key={emp.id} empID={emp.id} name={emp.name} />;
        })}
      </div>
    );
}

const mapStateToProps = ({ employees }) => {
    return {
        employees
    }
}

export default connect(mapStateToProps)(Home);
