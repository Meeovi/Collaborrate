import gql from 'graphql-tag'
export const createOneDashboards = gql`
mutation (
    data: {
    $articles: String!,
    $category: String!,
    $checklists: String!,
    $client_id: String!,
    $client_secret: String!,
    $content: String!,
    $created_at: DateTime!,
    $customers: String!,
    $id: BigInt!,
    $logo: String!,
    $media: String!,
    $name: String!,
    $privacy: String!,
    $products: String!,
    $projects: String!,
    $published: String!,
    $reports: String!,
    $sales: String!,
    $tasks: String!,
    $tickets: String!,
    $url: String!,
    $users: String!,
    $visits: String!,
    }
  ) {
createOneDashboards (
    data: {
    articles: $articles,
    category: $category,
    checklists: $checklists,
    client_id: $client_id,
    client_secret: $client_secret,
    content: $content,
    created_at: $created_at,
    customers: $customers,
    id: $id,
    logo: $logo,
    media: $media,
    name: $name,
    privacy: $privacy,
    products: $products,
    projects: $projects,
    published: $published,
    reports: $reports,
    sales: $sales,
    tasks: $tasks,
    tickets: $tickets,
    url: $url,
    users: $users,
    visits: $visits,
    }
  ) } {
    articles
    category
    checklists
    client_id
    client_secret
    content
    created_at
    customers
    id
    logo
    media
    name
    privacy
    products
    projects
    published
    reports
    sales
    tasks
    tickets
    url
    users
    visits
  }`
