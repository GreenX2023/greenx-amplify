/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      role
      email
      password
      contactnum
      address
      bio
      bookmarks {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      role
      email
      password
      contactnum
      address
      bio
      bookmarks {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      role
      email
      password
      contactnum
      address
      bio
      bookmarks {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      description
      price
      quantity
      location
      seller {
        id
        name
        role
        email
        password
        contactnum
        address
        bio
        createdAt
        updatedAt
      }
      category {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userBookmarksId
      categoryProductsId
      productSellerId
      productCategoryId
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
      description
      price
      quantity
      location
      seller {
        id
        name
        role
        email
        password
        contactnum
        address
        bio
        createdAt
        updatedAt
      }
      category {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userBookmarksId
      categoryProductsId
      productSellerId
      productCategoryId
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      description
      price
      quantity
      location
      seller {
        id
        name
        role
        email
        password
        contactnum
        address
        bio
        createdAt
        updatedAt
      }
      category {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userBookmarksId
      categoryProductsId
      productSellerId
      productCategoryId
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      description
      image
      products {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      description
      image
      products {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      description
      image
      products {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
