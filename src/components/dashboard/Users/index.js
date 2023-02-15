import React from 'react'
import {Link} from 'react-router-dom'
import DataTable from 'react-data-table-component'
import customStyles from '../CustomStyles'
import {
  fetchUsers,
  deleteUser
} from '../../../actions/users'
import {connect} from 'react-redux'

class Index extends React.Component {

  componentDidMount(){
    this.props.fetchUsers(this.props.auth.token)
  }

  onDelete = id => {
    this.props.deleteUser(this.props.auth.token, id)
  }

  renderButtons = id => {
    return (
      <div className="_buttons-group">
        <Link className="_table-button _table-button-edit" to={`/dashboard/users/${id}/edit`} >Edit</Link>
        <button className="_table-button _table-button-delete" onClick={() => this.onDelete(id)} >Bin</button>
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
          name: 'Role',
          selector: row => row.role,
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
            <Link to="/dashboard">Dashboard</Link> / <Link to="/dashboard/users">Users</Link>
            </div>
            <h1 className='_heading'>Users</h1>
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
    records: Object.values(state.usersState),
  }
}

export default connect(mapStateToProps, {
  fetchUsers,
  deleteUser
})(Index)