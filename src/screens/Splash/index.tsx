import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { setSession } from '~/store/actions/Authentication';
import { getSession } from '~/services';

import { Container } from '~/screens/Splash/styles';

const Splash = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      getSession()
        .then((userInformation) => {
          if (userInformation) {
            dispatch(setSession(userInformation));
            return navigation.navigate('AppRoutes');
          }

          navigation.navigate('AuthRoutes');
        });
    })();
  }, []);

  return (
    <Container />
  );
};

export default Splash;
