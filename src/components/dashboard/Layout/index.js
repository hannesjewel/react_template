import React from 'react'
import { Outlet, Link, Navigate } from "react-router-dom"
import MenuButton from './MenuButton'
import Logo from './Logo'
import AccountIcon from './AccountIcon'
import {
    signOut
} from '../../../actions'
import {connect} from 'react-redux'

class DashboardLayout extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            menuOpen: false
        }
        this.myRef = React.createRef()
        this.myRef2 = React.createRef()
    }

    componentDidMount(){
        this.toggleDropdown()
        this.toggleMenuItems()
    }

    signOut = e => {
        e.preventDefault()
        this.props.signOut(this.props.auth.token)
    }

    toggleDropdown = () => {
        const nodeList = document.querySelectorAll("._dashboard-list li a")
        window.addEventListener("click", e => {
            for(let a = 0; a < nodeList.length; a++){
                if(this.myRef.current && this.myRef2.current){
                    if(!this.myRef.current.contains(e.target) && !this.myRef2.current.contains(e.target)){
                        const show = document.querySelectorAll("._dashboard-list li ._show")
                        for(let b = 0; b < show.length; b++){
                            show[b].classList.remove("_show")
                        }
                    }
                }                
            }
        })
        for(let i = 0; i < nodeList.length; i++){
            if(nodeList[i].nextElementSibling && nodeList[i].nextElementSibling.tagName === "UL"){
                nodeList[i].addEventListener("click", e => {
                    e.preventDefault()
                    nodeList[i].nextElementSibling.classList.toggle('_show')                   
                })
            }
        }
    }

    toggleMenuItems = () => {
        const nodeList = document.querySelectorAll("._dashboard-side-menu ._list li a")        
        for(let i = 0; i < nodeList.length; i++){
            if(nodeList[i].nextElementSibling){
                nodeList[i].classList.add("_arrow")
                nodeList[i].addEventListener("click", e => {
                    e.preventDefault()
                    if(nodeList[i].nextElementSibling.classList.contains('_show')){
                        nodeList[i].nextElementSibling.classList.remove('_show')
                        nodeList[i].classList.remove('_up')
                    } else {
                        this.closeDropdowns()
                        nodeList[i].nextElementSibling.classList.add('_show')
                        nodeList[i].classList.add('_up')
                    }                    
                })
            } 
        }
    }

    closeDropdowns = () => {
        const dropdowns = document.querySelectorAll("._dashboard-side-menu ._list li > ul")
        const arrow = document.querySelectorAll("._dashboard-side-menu ._list li ._arrow")
        for(let a = 0; a < dropdowns.length; a++){
            dropdowns[a].classList.remove('_show')
        }
        for(let b = 0; b < arrow.length; b++){
            arrow[b].classList.remove('_up')
        }
    }

    toggleMenu = () => {
        this.closeDropdowns()
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }
    
    render(){

        if(!this.props.auth.token)
        return <Navigate to="/signin" />

        return(
            <>
                <div className="_dashboard-layout">
                    <header className='_dashboard-header'>
                        <div className='_item'>
                            <ul className='_dashboard-list'>
                                <li className={`_menu-icon ${this.state.menuOpen ? '_close' : ''}`}>
                                    <MenuButton onClick={this.toggleMenu} />
                                </li>
                                <li className='_logo-li'>
                                    <Logo />
                                </li>
                                <li className='_breadcrums'>
                                </li>
                            </ul>
                        </div>
                        <div className='_item'>
                            <ul className='_dashboard-list'>
                                <li>
                                    <a ref={this.myRef2} href="/" className='_profile-toggle-button'>
                                        <AccountIcon />
                                    </a>
                                    <ul ref={this.myRef}>
                                        <li>
                                            <Link to="/dashboard/account">My Account</Link>
                                        </li>
                                        <li>
                                            <Link to="/admin" onClick={this.signOut}>Signout</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            
                        </div>
                    </header>
                    <nav className={`_dashboard-side-menu ${this.state.menuOpen ? '_show' : ''}`}>
                        <div className='_overlay' onClick={this.toggleMenu} />
                        <ul className='_list'>
                            <li>
                                <Link to="/dashboard">
                                    Dashboard
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/dashboard/products">
                                    Products
                                </Link>
                                <ul>
                                    <li>
                                        <Link to="/dashboard/products">
                                            View All
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/products/create">
                                            Create
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/products/bin">
                                        Bin
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/dashboard/categories">
                                    Categories
                                </Link>
                                <ul>
                                    <li>
                                        <Link to="/dashboard/categories">
                                            View All
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/categories/create">
                                            Create
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/categories/bin">
                                        Bin
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/dashboard/users">
                                    Users
                                </Link>
                                <ul>
                                    <li>
                                        <Link to="/dashboard/users">
                                            View All
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/users/create">
                                            Create
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/users/bin">
                                        Bin
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/dashboard/account">My Account</Link>
                            </li>
                            <li>
                            <Link to="/admin" onClick={this.signOut}>Sign Out</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={`_dashboard-content ${this.state.menuOpen ? '_slide' : ''}`}>
                      <Outlet />
                    </div>                
                </div>

                
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
      auth: state.authState
    }
  }

export default connect(mapStateToProps, {
    signOut
})(DashboardLayout)