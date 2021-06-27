export interface IProduct {
  category: string
  description: string
  name: string
  id: string
  price: number
}

export interface IButtonProps {
  action: () => void
  title: string
  isLoading: boolean
}

export interface ICategoriesProps {
  data: ICategories[]
}

export interface ICategories {
  icon: string
  id: string
  order: number
  title: string
}

export interface IListRenderItem {
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
}

export interface IListProps {
  data: IProduct
  title: string
  length: number
}

export interface IProductListRenderItem {
  item: IProduct
  index: number
}
