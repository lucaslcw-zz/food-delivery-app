import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { setCategories } from '~/store/actions/Menu';
import { setSession } from '~/store/actions/Authentication';
import { getSession, getCategories } from '~/services';

import { Container } from '~/screens/Splash/styles';

const Splash = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      getSession()
        .then(async (userInformation) => {
          if (userInformation) {
            dispatch(setSession(userInformation));

            getCategories()
              .then((categories) => {
                dispatch(setCategories(categories));
                navigation.navigate('AppRoutes');
              });
          } else {
            navigation.navigate('AuthRoutes');
          }
        });
    })();
  }, []);

  return (
    <Container />
  );
};

export default Splash;
