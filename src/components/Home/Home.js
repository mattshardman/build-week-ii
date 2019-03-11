import React from 'react';
import Header from './Header';
import withLogin from '../loginHOC';
import Cards from './Cards';

function Home(props) {
    return(
        <>
            <Header {...props} />
            <Cards />
        </>
    )
}

export default withLogin(Home);