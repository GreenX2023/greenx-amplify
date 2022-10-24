/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
