import React from 'react';
import { Dimensions } from 'react-native';

import { Card } from '~/components/Categories/components';

import { Container, List } from '~/components/Categories/styles';

const Categories = ({ data }: any) => {
  const { width } = Dimensions.get('screen');
  const widthCalculated = ((width - (15 * 2)) - 10) / 2;

  return (
    <Container>
      <List
        data={data}
        keyExtractor={(item: any) => item.id.toString()}
        pagingEnabled
        getItemLayout={(data, index) => ({
          length: widthCalculated,
          offset: widthCalculated * index,
          index,
        })}
        renderItem={({ item, index }: any) => (
          <Card
            key={item.id}
            title={item.title}
            icon={item.icon}
            type={item.type}
            widthCalculated={widthCalculated}
            noMargin={index === data.length - 1}
          />
        )}
      />
    </Container>
  );
};

export default Categories;
