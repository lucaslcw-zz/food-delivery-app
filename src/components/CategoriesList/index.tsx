import React from 'react';

import { ICategoriesListProps, ICategory, ICategoryListRenderItem } from '~/@types';

import { Card } from '~/components/CategoriesList/components';

import { Container, List } from '~/components/CategoriesList/styles';

const CategoriesListComponent: React.FC<ICategoriesListProps> = (props: ICategoriesListProps) => {
  const { data } = props;

  const keyExtractor = (item: ICategory) => item.id;

  const renderItem = ({ item }: ICategoryListRenderItem) => (
    <Card
      key={item.id}
      title={item.title}
      icon={item.icon}
    />
  );

  return (
    <Container>
      <List<any>
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default CategoriesListComponent;
