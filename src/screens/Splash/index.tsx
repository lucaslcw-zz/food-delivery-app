import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { setCategories, setProducts } from '~/store/actions/Menu';
import { setSession } from '~/store/actions/Authentication';
import Firebase from '~/services';

import { Container } from '~/screens/Splash/styles';

const Splash: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      Firebase.getSession()
        .then(async (userInformation) => {
          if (userInformation) {
            dispatch(setSession(userInformation));

            try {
              const categories = await Firebase.getCategories();
              const products = await Firebase.getProducts();

              dispatch(setCategories(categories));
              dispatch(setProducts(products));
            } catch (error) {
              // DISPLAY TOAST
            }

            navigation.navigate('AppRoutes');
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
