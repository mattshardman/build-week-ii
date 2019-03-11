import React from 'react';
import Header from './Header';
import withLogin from '../loginHOC';

function Home(props) {
    console.log(props)
    return(
        <>
            <Header logOut={props.logOut} />
        </>
    )
}

export default withLogin(Home);