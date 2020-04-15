import React from 'react';
import { connect } from "react-redux";

import { fetchData } from './actions';

const BasketballPlayers = props => {
    return (
        <div id="bball-players">
            {props.loading ? (
                <div>data loading</div>
            ) : (
                <div>
                    <button onClick={() => props.fetchData()}>get data</button>
                    <p>{props.first_name}</p>
                    <p>{props.last_name}</p>
                    <p>{props.team}</p>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        player: state.player,
        loading: state.loading,
        error: state.error
    }
}

export default connect(
    mapStateToProps, 
    { fetchData }
)(BasketballPlayers);