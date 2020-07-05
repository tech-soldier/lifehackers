import React from "react";
import { connect } from 'react-redux'

import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import Routes from "./Routes";

class ServiceApp extends React.Component {
    renderApplication = (auth) => {
        return (
            <React.Fragment>
                <Navbar auth={this.props.auth}/>
                <Navbar
                    auth={auth}
                    id="navbar-clone" />
                <Sidebar />
                <Routes />
            </React.Fragment>
        )
    }
    render () {
        const { auth } = this.props
        return this.renderApplication()
    }
}

const mapStateToProps = () => ({auth: state.auth})
export default connect()(ServiceApp)
