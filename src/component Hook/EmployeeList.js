import React from 'react'
import { connect, useSelector } from 'react-redux';
import EmployeeDetail from './EmployeeDetail';
import HomePage from './HomePage';
import ManagerDetail from './ManagerDetail';

const EmployeeList = (props) => {
    // const { employee } = useSelector(state => state.employee.employees)
    return (
        <div className="container">
            <div className="row">
                <HomePage />
                {props.employee &&
                    props.employee.map((post) =>
                        <EmployeeDetail post={post} key={post.id} />
                    )}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        employee: state.employee.employees,
    }
}
export default connect(mapStateToProps)(EmployeeList)
// export default EmployeeList
