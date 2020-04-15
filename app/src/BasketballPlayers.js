import React from 'react';
import { connect } from "react-redux";

import { fetchData } from './actions';

const BasketballPlayers = props => {
    return (
        <div className="players">
            {props.loading ? (
                <div className="loading">loading players...</div>
            ) : (
                <>
                <button className="loading-players-button" onClick={() => props.fetchData()}>Get Players</button>
                    <div className="players-list">
                        {props.player.map(players => {
                            return (
                                <div className="player-card" key={players.id}>
                                    <p className="player-name">{players.first_name} {players.last_name} <span className="position">{players.position}</span></p>
                                    <p>Conference: {players.team.conference}</p>
                                    <p>Division: {players.team.division}</p>
                                </div>
                            )
                        })}
                    </div>
                </>
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