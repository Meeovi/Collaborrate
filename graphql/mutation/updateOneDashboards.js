import gql from 'graphql-tag'
export const updateOneDashboards = gql`
mutation (
    data: {
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
updateOneDashboards (
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
