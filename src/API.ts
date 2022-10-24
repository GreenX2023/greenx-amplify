/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  role: string,
  email: string,
  password: string,
  contactnum: string,
  address: string,
  bio: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  role?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  contactnum?: ModelStringInput | null,
  address?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  role: string,
  email: string,
  password: string,
  contactnum: string,
  address: string,
  bio: string,
  bookmarks?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name: string,
  description: string,
  price: number,
  quantity: string,
  location: string,
  seller?: User | null,
  category?: Category | null,
  createdAt: string,
  updatedAt: string,
  userBookmarksId?: string | null,
  categoryProductsId?: string | null,
  productSellerId?: string | null,
  productCategoryId?: string | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  description: string,
  image: string,
  products?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  role?: string | null,
  email?: string | null,
  password?: string | null,
  contactnum?: string | null,
  address?: string | null,
  bio?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  name: string,
  description: string,
  price: number,
  quantity: string,
  location: string,
  userBookmarksId?: string | null,
  categoryProductsId?: string | null,
  productSellerId?: string | null,
  productCategoryId?: string | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelIntInput | null,
  quantity?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
  userBookmarksId?: ModelIDInput | null,
  categoryProductsId?: ModelIDInput | null,
  productSellerId?: ModelIDInput | null,
  productCategoryId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  price?: number | null,
  quantity?: string | null,
  location?: string | null,
  userBookmarksId?: string | null,
  categoryProductsId?: string | null,
  productSellerId?: string | null,
  productCategoryId?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
  description: string,
  image: string,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  image?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  role?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  contactnum?: ModelStringInput | null,
  address?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelIntInput | null,
  quantity?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
  userBookmarksId?: ModelIDInput | null,
  categoryProductsId?: ModelIDInput | null,
  productSellerId?: ModelIDInput | null,
  productCategoryId?: ModelIDInput | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    role: string,
    email: string,
    password: string,
    contactnum: string,
    address: string,
    bio: string,
    bookmarks?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    role: string,
    email: string,
    password: string,
    contactnum: string,
    address: string,
    bio: string,
    bookmarks?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    role: string,
    email: string,
    password: string,
    contactnum: string,
    address: string,
    bio: string,
    bookmarks?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    quantity: string,
    location: string,
    seller?:  {
      __typename: "User",
      id: string,
      name: string,
      role: string,
      email: string,
      password: string,
      contactnum: string,
      address: string,
      bio: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBookmarksId?: string | null,
    categoryProductsId?: string | null,
    productSellerId?: string | null,
    productCategoryId?: string | null,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    quantity: string,
    location: string,
    seller?:  {
      __typename: "User",
      id: string,
      name: string,
      role: string,
      email: string,
      password: string,
      contactnum: string,
      address: string,
      bio: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBookmarksId?: string | null,
    categoryProductsId?: string | null,
    productSellerId?: string | null,
    productCategoryId?: string | null,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    quantity: string,
    location: string,
    seller?:  {
      __typename: "User",
      id: string,
      name: string,
      role: string,
      email: string,
      password: string,
      contactnum: string,
      address: string,
      bio: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBookmarksId?: string | null,
    categoryProductsId?: string | null,
    productSellerId?: string | null,
    productCategoryId?: string | null,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description: string,
    image: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description: string,
    image: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description: string,
    image: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    role: string,
    email: string,
    password: string,
    contactnum: string,
    address: string,
    bio: string,
    bookmarks?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      role: string,
      email: string,
      password: string,
      contactnum: string,
      address: string,
      bio: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    quantity: string,
    location: string,
    seller?:  {
      __typename: "User",
      id: string,
      name: string,
      role: string,
      email: string,
      password: string,
      contactnum: string,
      address: string,
      bio: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBookmarksId?: string | null,
    categoryProductsId?: string | null,
    productSellerId?: string | null,
    productCategoryId?: string | null,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      price: number,
      quantity: string,
      location: string,
      createdAt: string,
      updatedAt: string,
      userBookmarksId?: string | null,
      categoryProductsId?: string | null,
      productSellerId?: string | null,
      productCategoryId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description: string,
    image: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    role: string,
    email: string,
    password: string,
    contactnum: string,
    address: string,
    bio: string,
    bookmarks?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    role: string,
    email: string,
    password: string,
    contactnum: string,
    address: string,
    bio: string,
    bookmarks?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    role: string,
    email: string,
    password: string,
    contactnum: string,
    address: string,
    bio: string,
    bookmarks?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    quantity: string,
    location: string,
    seller?:  {
      __typename: "User",
      id: string,
      name: string,
      role: string,
      email: string,
      password: string,
      contactnum: string,
      address: string,
      bio: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBookmarksId?: string | null,
    categoryProductsId?: string | null,
    productSellerId?: string | null,
    productCategoryId?: string | null,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    quantity: string,
    location: string,
    seller?:  {
      __typename: "User",
      id: string,
      name: string,
      role: string,
      email: string,
      password: string,
      contactnum: string,
      address: string,
      bio: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBookmarksId?: string | null,
    categoryProductsId?: string | null,
    productSellerId?: string | null,
    productCategoryId?: string | null,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    quantity: string,
    location: string,
    seller?:  {
      __typename: "User",
      id: string,
      name: string,
      role: string,
      email: string,
      password: string,
      contactnum: string,
      address: string,
      bio: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      description: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBookmarksId?: string | null,
    categoryProductsId?: string | null,
    productSellerId?: string | null,
    productCategoryId?: string | null,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description: string,
    image: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description: string,
    image: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description: string,
    image: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
