import React, { useState, useEffect } from "react";
import { auth } from "firebase";

import firebase from '../config/initFirebase';
import Login from "./Login/Login";

const { googleProvider, fbProvider } = firebase;

const withLogin = Component => {
  const WithLogin = props => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(false);

    const login = (loginType) => {
      const provider = loginType === 'fb' ? fbProvider : googleProvider;
      setLoading(true);
      auth()
        .signInWithPopup(provider)
        .then(result => {
          const user = result.user;
          setUser(user);
        });
    };

    const logOut = () => auth().signOut();

    useEffect(() => {
      auth().onAuthStateChanged(function(user) {
        if (user) {
          setUser(user);
        } else {
          setUser(false);
        }
      });
    });

    if (user) {
      return (
        <Component
          user={user}
          logOut={logOut}
          {...props}
          db={firebase.database}
          storage={firebase.store}
        />
      );
    }

    return <Login logIn={login} {...props} user={user} loading={loading} />;
  };

  return WithLogin;
};

export default withLogin;
