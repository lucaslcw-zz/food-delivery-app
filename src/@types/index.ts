export interface IProduct {
  category: string
  description: string
  name: string
  id: string
  price: number
  image: string
}

export interface IButtonProps {
  action: () => void
  title: string
  isLoading: boolean
}

export interface ICategoriesListProps {
  data: ICategories[]
}

export interface ICategories {
  icon: string
  id: string
  order: number
  title: string
}

export interface ICategoryListRenderItem {
  item: ICategories
  index: number
}

export interface ICategoryCardProps {
  title: string
  icon: string
  noMargin: boolean
  widthCalculated: number
}

export interface IHeaderProps {
  title: string
  hasHeaderRight: boolean
}

export interface IContainerStylesProps {
  width: number
  noMargin: boolean
}

export interface IProductCardProps {
  name: string
  description: string
  price: number
  image: string
}

export interface IProductsListProps {
  data: IProduct
  title: string
  length: number
}

export interface IProductListRenderItem {
  item: IProduct
  index: number
}
