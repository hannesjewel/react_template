import React, {useEffect} from 'react'
import {Link, Navigate} from 'react-router-dom'
import UserCreateForm from '../../forms/UserCreateForm'
import {connect} from 'react-redux'
import {
    createUser
} from '../../../actions/users'
import {
  resetForms
} from '../../../actions'

const Create = props => {

  useEffect(() => {
    return props.resetForms
  })

  const onSubmit = formValues => {
    props.createUser(props.auth.token, formValues)
  }


  if(props.record.success){
    return <Navigate to="/dashboard/users" />
  }

  return(
    <section className="">
      <div className='_grid'>
        <div className='_column'>
          <div className="_breadcrumbs">
            <Link to="/dashboard">Dashboard</Link> / <Link to="/dashboard/users">Users</Link>
          </div>
          <h1 className='_heading'>Create User</h1>
          <UserCreateForm 
              onSubmit={onSubmit} 
              errors={props.record.errors ? props.record.errors : null} 
              success={props.record.success ? props.record.success : null} 
          />
        </div>
      </div>
    </section>
  )
}

const mapStatetoProps = state => {
  return {
      auth: state.authState,
      record: state.userCreateState
  }
}

export default connect(mapStatetoProps, {
  createUser,
  resetForms
})(Create)