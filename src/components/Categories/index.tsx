import React from 'react';
import { Dimensions } from 'react-native';

import { ICategoriesProps, ICategories, IListRenderItem } from '~/@types';

import { Card } from '~/components/Categories/components';

import { Container, List } from '~/components/Categories/styles';

const CategoriesComponent: React.FC<ICategoriesProps> = (props: ICategoriesProps) => {
  const { data } = props;

  const { width } = Dimensions.get('screen');
  const widthCalculated: number = ((width - (15 * 2)) - 10) / 2;

  const keyExtractor = (item: ICategories) => item.id.toString();

  const renderItem = ({ item, index }: IListRenderItem) => (
    <Card
      key={item.id}
      title={item.title}
      icon={item.icon}
      widthCalculated={widthCalculated}
      noMargin={index === data.length - 1}
    />
  );

  return (
    <Container>
      <List<any>
        data={data}
        keyExtractor={keyExtractor}
        pagingEnabled
        getItemLayout={(item: ICategories, index: number) => ({
          length: widthCalculated,
          offset: widthCalculated * index,
          index,
        })}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default CategoriesComponent;
