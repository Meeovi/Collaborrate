import gql from 'graphql-tag'
export const upsertOneDashboards = gql`
mutation (
    create: {
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
    update: {
    $articles: NullableStringFieldUpdateOperationsInput!,
    $category: NullableStringFieldUpdateOperationsInput!,
    $checklists: NullableStringFieldUpdateOperationsInput!,
    $client_id: NullableStringFieldUpdateOperationsInput!,
    $client_secret: NullableStringFieldUpdateOperationsInput!,
    $content: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $customers: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $logo: NullableStringFieldUpdateOperationsInput!,
    $media: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $privacy: NullableStringFieldUpdateOperationsInput!,
    $products: NullableStringFieldUpdateOperationsInput!,
    $projects: NullableStringFieldUpdateOperationsInput!,
    $published: NullableStringFieldUpdateOperationsInput!,
    $reports: NullableStringFieldUpdateOperationsInput!,
    $sales: NullableStringFieldUpdateOperationsInput!,
    $tasks: NullableStringFieldUpdateOperationsInput!,
    $tickets: NullableStringFieldUpdateOperationsInput!,
    $url: NullableStringFieldUpdateOperationsInput!,
    $users: NullableStringFieldUpdateOperationsInput!,
    $visits: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    $name: String!,
    }
  ) {
upsertOneDashboards (
    create: {
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
    update: {
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
    where: {
    id: $id,
    name: $name,
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
