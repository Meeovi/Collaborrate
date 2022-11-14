import gql from 'graphql-tag'
export const deleteManyDashboards = gql`
mutation (
    where: {
    $AND: [DashboardsWhereInput!]!,
    $NOT: [DashboardsWhereInput!]!,
    $OR: [DashboardsWhereInput!]!,
    $articles: StringNullableFilter!,
    $category: StringNullableFilter!,
    $checklists: StringNullableFilter!,
    $client_id: StringNullableFilter!,
    $client_secret: StringNullableFilter!,
    $content: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $customers: StringNullableFilter!,
    $id: BigIntFilter!,
    $logo: StringNullableFilter!,
    $media: StringNullableFilter!,
    $name: StringNullableFilter!,
    $privacy: StringNullableFilter!,
    $products: StringNullableFilter!,
    $projects: StringNullableFilter!,
    $published: StringNullableFilter!,
    $reports: StringNullableFilter!,
    $sales: StringNullableFilter!,
    $tasks: StringNullableFilter!,
    $tickets: StringNullableFilter!,
    $url: StringNullableFilter!,
    $users: StringNullableFilter!,
    $visits: StringNullableFilter!,
    }
  ) {
deleteManyDashboards (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
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
    count
  }`
