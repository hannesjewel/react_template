import React from 'react'
import {Link} from 'react-router-dom'

class Logo extends React.Component {

    render(){

        return(
            <Link to="/dashboard" className='_logo'>
                <img src={``} alt="logo" width="170" />
                <p>Logo</p>
            </Link>
        )
    }
}

export default Logo