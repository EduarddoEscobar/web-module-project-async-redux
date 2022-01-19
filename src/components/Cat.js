import React, { useEffect } from 'react';
import Loading from './Loading';

import { connect } from 'react-redux';
import { getCat } from '../actions/catActions';

const Cat = ({url, fact, fetching, dispatch}) => {
    useEffect(() => {
        dispatch(getCat());
    }, [])

    return(
        <div className="cat">
            {fetching ? <Loading /> : 
            <>
                <h2>{fact}</h2>
                <img src={url} className="cat-picture"/>
                <button onClick={() => dispatch(getCat())} className="cat-button">New Cat</button>
            </>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
      url: state.url,
      fact: state.fact,
      fetching: state.fetching,
    }
}

export default connect(mapStateToProps)(Cat);