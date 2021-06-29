export type IProduct = {
  category: string
  description: string
  name: string
  id: string
  price: number
  image: string
}

export type IOrder = {
  createdAt: number
  status: string
  products: IOrder[]
  id: string
}

export type IButtonProps = {
  action: () => void
  title: string
  isLoading: boolean
}

export type ICategoriesListProps = {
  data: ICategory[]
}

export type ICategory = {
  icon: string
  id: string
  order: number
  title: string
}

export type ICategoryListRenderItem = {
  item: ICategory
}

export type ICategoryCardProps = {
  title: string
  icon: string
}

export type IHeaderProps = {
  title: string
  hasHeaderRight?: boolean
}

export type IProductCardProps = {
  name: string
  description: string
  price: number
  image: string
  id: string
}

export type IOrderCardProps = {
  createdAt: number
  status: string
  id: string
  products: IOrder[]
}

export type IProductsListProps = {
  data: IProduct
  title: string
  length: number
}

export type IOrdersListProps = {
  data: IOrder[]
}

export type IProductListRenderItem = {
  item: IProduct
  index: number
}

export type IOrderListRenderItem = {
  item: IOrder
}

export type IMarginStylesProps = {
  flexGrow?: number
}

export type IProductCardCartProps = {
  name: string
  price: number
  image: string
  index: number
}

export type ILineStylesProps = {
  marginTop: number
  marginBottom: number
}

export type IButtonStylesProps = {
  opacity: number
}

export type ICategoryFirebaseDoc = Omit<ICategory, 'icon'|'order'|'title'>;

export type IProductFirebaseDoc = Omit<IProduct, 'category'|'description'|'name'|'price'|'image'>;
