import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import { setCategory } from '~/store/actions/Menu';

import { Container, Title } from '~/components/Categories/components/Card/styles';

const Card = (props: any) => {
  const {
    title,
    icon,
    noMargin,
    widthCalculated,
  } = props;

  const dispatch = useDispatch();

  return (
    <Container
      width={widthCalculated}
      noMargin={noMargin}
      onPress={() => dispatch(setCategory(title))}
    >
      <FontAwesome5 name={icon} size={18} color="#ffffff" />
      <Title>{title}</Title>
    </Container>
  );
};

export default Card;
