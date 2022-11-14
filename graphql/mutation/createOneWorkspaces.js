import gql from 'graphql-tag'
export const createOneWorkspaces = gql`
mutation (
    data: {
    $author: String!,
    $brands: BigInt!,
    $brands_brandsToworkspaces: String!,
    $categories: String!,
    $category: Int!,
    $code: String!,
    $created_at: DateTime!,
    $customers: Int!,
    $customers_customersToworkspaces: String!,
    $description: String!,
    $id: BigInt!,
    $isPublic: Boolean!,
    $media: String!,
    $name: String!,
    $products: BigInt!,
    $products_productsToworkspaces: String!,
    $projects: BigInt!,
    $projects_projectsToworkspaces: String!,
    $shops: Int!,
    $shops_shopsToworkspaces: String!,
    $tasks: BigInt!,
    $tasks_tasksToworkspaces: String!,
    $users: Int!,
    $users_usersToworkspaces: String!,
    }
  ) {
createOneWorkspaces (
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
