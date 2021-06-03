import React from "react";
import { connect } from "react-redux";
import cx from "classnames";

import { reset } from "../../redux/actions/settings";

import css from './settings.module.css';

class Settings extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            reset: props.reset,
            isCollapsed: true
        }
    }

    toggleCollapse = (e) => {
        e.preventDefault();
        this.setState({
            isCollapsed: !this.state.isCollapsed
        })
        
    }

    handleClickReset = (e) => {
        e.preventDefault();
        this.state.reset();
    }


    render = () => {
        return (
            <div className = {cx({[css.container]: true})}>
            <h1 className={css.title}>React based Chess</h1>        
            <button onClick = {e => this.handleClickReset(e)} className = {css.button}>
                    Reset
        </button>
            </div>
        )
    }
}

const ConnectedSettings = connect(
    null,
    { reset}
)(Settings)

export default ConnectedSettings;