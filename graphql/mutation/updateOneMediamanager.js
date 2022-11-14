import gql from 'graphql-tag'
export const updateOneMediamanager = gql`
mutation (
    data: {
    $agreements: NullableStringFieldUpdateOperationsInput!,
    $agreements_agreementsTomediamanager: NullableStringFieldUpdateOperationsInput!,
    $albums: NullableStringFieldUpdateOperationsInput!,
    $author: NullableStringFieldUpdateOperationsInput!,
    $brands: NullableStringFieldUpdateOperationsInput!,
    $brands_brandsTomediamanager: NullableStringFieldUpdateOperationsInput!,
    $comment: NullableStringFieldUpdateOperationsInput!,
    $comments: NullableStringFieldUpdateOperationsInput!,
    $content_type: NullableStringFieldUpdateOperationsInput!,
    $copyright: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $customers: NullableStringFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $dimensions: NullableStringFieldUpdateOperationsInput!,
    $expiration_date: NullableStringFieldUpdateOperationsInput!,
    $keywords: NullableStringFieldUpdateOperationsInput!,
    $media: NullableStringFieldUpdateOperationsInput!,
    $members: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $products: NullableStringFieldUpdateOperationsInput!,
    $products_mediamanagerToproducts: NullableStringFieldUpdateOperationsInput!,
    $status: NullableStringFieldUpdateOperationsInput!,
    $tags: NullableStringFieldUpdateOperationsInput!,
    $task_description: NullableStringFieldUpdateOperationsInput!,
    $task_name: NullableStringFieldUpdateOperationsInput!,
    $task_type: NullableStringFieldUpdateOperationsInput!,
    $tasks: NullableStringFieldUpdateOperationsInput!,
    $users: NullableStringFieldUpdateOperationsInput!,
    $versions: NullableStringFieldUpdateOperationsInput!,
    $watermark_description: NullableStringFieldUpdateOperationsInput!,
    $watermark_media: NullableStringFieldUpdateOperationsInput!,
    $watermark_name: NullableStringFieldUpdateOperationsInput!,
    $workspace: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: Int!,
    }
  ) {
updateOneMediamanager (
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
    where: {
    id: $id,
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
