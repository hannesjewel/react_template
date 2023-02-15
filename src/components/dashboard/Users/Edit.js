import React, {useEffect} from 'react'
import {Link, Navigate, useParams} from 'react-router-dom'
import UserEditForm from '../../forms/UserEditForm'
import {connect} from 'react-redux'
import {
    updateUser,
    fetchUser
} from '../../../actions/users'
import {
  resetForms
} from '../../../actions'

const Edit = props => {

    const { id } = useParams();

    useEffect(() => {
      props.fetchUser(props.auth.token, id)
      return props.resetForms
    },[])

    const onSubmit = formValues => {
      props.updateUser(props.auth.token, id, formValues)
    }

    if(props.response.success){
      return <Navigate to="/dashboard/users" />
    }

    return(
      <section className="">
        <div className='_grid'>
          <div className='_column'>
            <div className="_breadcrumbs">
            <Link to="/dashboard">Dashboard</Link> / <Link to="/dashboard/users">Users</Link> / Edit
            </div>
            <h1 className='_heading'>User Edit</h1>

            <UserEditForm 
                initialValues={props.records[id]}
                onSubmit={onSubmit} 
                errors={props.response.errors ? props.response.errors : null} 
                success={props.response.success ? props.response.success : null} 
            />
          </div>
        </div>
      </section>
    )
}

const mapStatetoProps = state => {
  return {
      auth: state.authState,
      records: state.usersState,
      response: state.userUpdateState
  }
}

export default connect(mapStatetoProps, {
  updateUser,
  fetchUser,
  resetForms
})(Edit)