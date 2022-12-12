import gql from 'graphql-tag'
export const updateOneWorkspaces = gql`
mutation (
    data: {
    $author: NullableStringFieldUpdateOperationsInput!,
    $brands: NullableBigIntFieldUpdateOperationsInput!,
    $brands_brandsToworkspaces: NullableStringFieldUpdateOperationsInput!,
    $categories: NullableStringFieldUpdateOperationsInput!,
    $category: NullableIntFieldUpdateOperationsInput!,
    $code: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $customers: NullableIntFieldUpdateOperationsInput!,
    $customers_customersToworkspaces: NullableStringFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $isPublic: NullableBoolFieldUpdateOperationsInput!,
    $media: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $products: NullableBigIntFieldUpdateOperationsInput!,
    $products_productsToworkspaces: NullableStringFieldUpdateOperationsInput!,
    $projects: NullableBigIntFieldUpdateOperationsInput!,
    $projects_projectsToworkspaces: NullableStringFieldUpdateOperationsInput!,
    $shops: NullableIntFieldUpdateOperationsInput!,
    $shops_shopsToworkspaces: NullableStringFieldUpdateOperationsInput!,
    $tasks: NullableBigIntFieldUpdateOperationsInput!,
    $tasks_tasksToworkspaces: NullableStringFieldUpdateOperationsInput!,
    $users: NullableIntFieldUpdateOperationsInput!,
    $users_usersToworkspaces: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
updateOneWorkspaces (
    data: {
    author: $author,
    brands: $brands,
    brands_brandsToworkspaces: $brands_brandsToworkspaces,
    categories: $categories,
    category: $category,
    code: $code,
    created_at: $created_at,
    customers: $customers,
    customers_customersToworkspaces: $customers_customersToworkspaces,
    description: $description,
    id: $id,
    isPublic: $isPublic,
    media: $media,
    name: $name,
    products: $products,
    products_productsToworkspaces: $products_productsToworkspaces,
    projects: $projects,
    projects_projectsToworkspaces: $projects_projectsToworkspaces,
    shops: $shops,
    shops_shopsToworkspaces: $shops_shopsToworkspaces,
    tasks: $tasks,
    tasks_tasksToworkspaces: $tasks_tasksToworkspaces,
    users: $users,
    users_usersToworkspaces: $users_usersToworkspaces,
    }
    where: {
    id: $id,
    }
  ) } {
    author
    brands
    brands_brandsToworkspaces
    categories
    category
    code
    created_at
    customers
    customers_customersToworkspaces
    description
    id
    isPublic
    media
    name
    products
    products_productsToworkspaces
    projects
    projects_projectsToworkspaces
    shops
    shops_shopsToworkspaces
    tasks
    tasks_tasksToworkspaces
    users
    users_usersToworkspaces
  }`
