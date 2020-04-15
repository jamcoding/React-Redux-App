import React from 'react';
import { connect } from "react-redux";

import { fetchData } from './actions';

const BasketballPlayers = props => {
    return (
        <div>
            {props.loading ? (
                <div>data loading</div>
            ) : (
                <div>
                    <button onClick={() => props.fetchData()}>get data</button>
                    {props.player.map(players => {
                        return (
                        <p key={players.id}>{players.first_name}</p>
                        )
                    })}
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