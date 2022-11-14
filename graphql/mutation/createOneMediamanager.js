import gql from 'graphql-tag'
export const createOneMediamanager = gql`
mutation (
    data: {
    $agreements: String!,
    $agreements_agreementsTomediamanager: String!,
    $albums: String!,
    $author: String!,
    $brands: String!,
    $brands_brandsTomediamanager: String!,
    $comment: String!,
    $comments: String!,
    $content_type: String!,
    $copyright: String!,
    $created_at: DateTime!,
    $customers: String!,
    $description: String!,
    $dimensions: String!,
    $expiration_date: String!,
    $keywords: String!,
    $media: String!,
    $members: String!,
    $name: String!,
    $products: String!,
    $products_mediamanagerToproducts: String!,
    $status: String!,
    $tags: String!,
    $task_description: String!,
    $task_name: String!,
    $task_type: String!,
    $tasks: String!,
    $users: String!,
    $versions: String!,
    $watermark_description: String!,
    $watermark_media: String!,
    $watermark_name: String!,
    $workspace: String!,
    }
  ) {
createOneMediamanager (
    data: {
    agreements: $agreements,
    agreements_agreementsTomediamanager: $agreements_agreementsTomediamanager,
    albums: $albums,
    author: $author,
    brands: $brands,
    brands_brandsTomediamanager: $brands_brandsTomediamanager,
    comment: $comment,
    comments: $comments,
    content_type: $content_type,
    copyright: $copyright,
    created_at: $created_at,
    customers: $customers,
    description: $description,
    dimensions: $dimensions,
    expiration_date: $expiration_date,
    keywords: $keywords,
    media: $media,
    members: $members,
    name: $name,
    products: $products,
    products_mediamanagerToproducts: $products_mediamanagerToproducts,
    status: $status,
    tags: $tags,
    task_description: $task_description,
    task_name: $task_name,
    task_type: $task_type,
    tasks: $tasks,
    users: $users,
    versions: $versions,
    watermark_description: $watermark_description,
    watermark_media: $watermark_media,
    watermark_name: $watermark_name,
    workspace: $workspace,
    }
  ) } {
    agreements
    agreements_agreementsTomediamanager
    albums
    author
    brands
    brands_brandsTomediamanager
    comment
    comments
    content_type
    copyright
    created_at
    customers
    description
    dimensions
    expiration_date
    id
    keywords
    media
    members
    name
    products
    products_mediamanagerToproducts
    status
    tags
    task_description
    task_name
    task_type
    tasks
    users
    versions
    watermark_description
    watermark_media
    watermark_name
    workspace
  }`
