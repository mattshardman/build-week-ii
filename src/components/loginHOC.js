import React, { useState, useEffect } from "react";
import { auth, initializeApp, firestore, storage } from "firebase";

import { config } from "../config/config";
import Login from "./Login/Login";

initializeApp(config);
const db = firestore();
const store = storage();
const provider = new auth.GoogleAuthProvider();

const withLogin = Component => {
  const WithLogin = props => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(false);

    const login = () => {
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
          db={db}
          storage={store}
        />
      );
    }

    return <Login logIn={login} {...props} user={user} loading={loading} />;
  };

  return WithLogin;
};

export default withLogin;
