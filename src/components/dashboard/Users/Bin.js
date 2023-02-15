import React from 'react'
import {Link} from 'react-router-dom'
import DataTable from 'react-data-table-component'
import customStyles from '../CustomStyles'
import {
  fetchUsersBin,
  forceDeleteUser,
  restoreUser
} from '../../../actions/users'
import {connect} from 'react-redux'

class Bin extends React.Component {

  componentDidMount(){
    this.props.fetchUsersBin(this.props.auth.token)
  }

  onRestore = id => {
      this.props.restoreUser(this.props.auth.token, id)
  }

  onDelete = id => {
      this.props.forceDeleteUser(this.props.auth.token, id)
  }

  renderButtons = id => {
      return (
          <div className="_buttons-group">
              <button className="_table-button _table-button-edit" onClick={() => this.onRestore(id)} >Restore</button>
              <button className="_table-button _table-button-delete" onClick={() => this.onDelete(id)} >Delete</button>
          </div>
      )
  }
  render(){

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Actions',
            selector: row => row.actions,
            cell: row => {
                return this.renderButtons(row.id)
            }
        },
    ];

    return(
      <section className="">
        <div className='_grid'>
          <div className='_column'>
            <div className="_breadcrumbs">
              <Link to="/dashboard">Dashboard</Link> / <Link to="/dashboard/users">Users</Link> / Bin
            </div>
            <h1 className='_heading'>Users Bin</h1>
            <DataTable
              columns={columns}
              data={this.props.records}
              pagination
              customStyles={customStyles}
            />
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
      auth: state.authState,
      records: Object.values(state.usersBinState)
  }
}

export default connect(mapStateToProps, {
  fetchUsersBin,
  forceDeleteUser,
  restoreUser
})(Bin)