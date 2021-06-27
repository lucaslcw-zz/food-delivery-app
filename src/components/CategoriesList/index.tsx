import React from 'react';
import { Dimensions } from 'react-native';

import { ICategoriesListProps, ICategories, ICategoryListRenderItem } from '~/@types';

import { Card } from '~/components/CategoriesList/components';

import { Container, List } from '~/components/CategoriesList/styles';

const CategoriesListComponent: React.FC<ICategoriesListProps> = (props: ICategoriesListProps) => {
  const { data } = props;

  const { width } = Dimensions.get('screen');
  const widthCalculated: number = ((width - (15 * 2)) - 10) / 2;

  const keyExtractor = (item: ICategories) => item.id;

  const renderItem = ({ item, index }: ICategoryListRenderItem) => (
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

export default CategoriesListComponent;
