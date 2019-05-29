import React from 'react';
import { connect } from 'react-redux';

import { Card } from '../ui/card';
import { Container } from '../ui/container';

const employeeCard = ({appointments, empID, name}) => {
    console.log(appointments, empID)
    return (
        <Container>
            <Card width="30%">
                <h3>{name}</h3>
            </Card>
        </Container>
    )
}

const mapStateToProps = ({ appointments }) => {
    return {
        appointments
    }
}

export default connect(mapStateToProps)(employeeCard);
