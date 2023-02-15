import React from 'react'
import {Link} from 'react-router-dom'
import AccountForm from '../forms/AccountForm'
import {
  fetchAccount,
  updateAccount
} from '../../actions'
import {connect} from 'react-redux'

class DashboardAccount extends React.Component {

  componentDidMount(){
    this.props.fetchAccount(this.props.auth.token)
  }

  onSubmit = formValues => {
    this.props.updateAccount(this.props.auth.token, formValues)
  }

  render(){

    return(
      <section className="">
        <div className='_grid'>
          <div className='_column'>
            <div className="_breadcrumbs">
              <Link to="/dashboard">Dashboard</Link>
            </div>
            <h1 className='_heading'>My Account</h1>
            <div className='_panel'>
              <AccountForm 
                onSubmit={this.onSubmit}
                initialValues={this.props.account.details ? this.props.account.details : null}
                errors={this.props.account.errors ? this.props.account.errors : null}
                success={this.props.account.success ? true : null}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.authState,
    account: state.accountState,
  }
}

export default connect(mapStateToProps, {
  fetchAccount,
  updateAccount
})(DashboardAccount)