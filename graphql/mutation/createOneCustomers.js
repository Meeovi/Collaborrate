import gql from 'graphql-tag'
export const createOneCustomers = gql`
mutation (
    data: {
    $Address: String!,
    $address_two: String!,
    $comments: String!,
    $confirmed_email: String!,
    $country: String!,
    $credit_memos: String!,
    $customer_group: String!,
    $customer_payment: String!,
    $customer_since: DateTime!,
    $date_of_birth: String!,
    $description: String!,
    $email: String!!,
    $emails: String!,
    $first_name: String!!,
    $gender: String!,
    $image: String!,
    $last_name: String!!,
    $mediamanager: String!,
    $messages: String!,
    $middle_name: String!,
    $name_prefix: String!,
    $name_suffix: String!,
    $newsletter_subscribers: String!,
    $orders: String!,
    $password: String!,
    $payment_type: String!,
    $phone: String!,
    $product: String!,
    $projects: String!,
    $quotes: String!,
    $returns: String!,
    $short_description: String!,
    $state: String!,
    $tax_vat_number: String!,
    $thumbnail: String!,
    $username: String!,
    $websites: String!,
    $workspaces: String!,
    $zipcode: String!,
    }
  ) {
createOneCustomers (
    data: {
    Address: $Address,
    address_two: $address_two,
    comments: $comments,
    confirmed_email: $confirmed_email,
    country: $country,
    credit_memos: $credit_memos,
    customer_group: $customer_group,
    customer_payment: $customer_payment,
    customer_since: $customer_since,
    date_of_birth: $date_of_birth,
    description: $description,
    email: $email,
    emails: $emails,
    first_name: $first_name,
    gender: $gender,
    image: $image,
    last_name: $last_name,
    mediamanager: $mediamanager,
    messages: $messages,
    middle_name: $middle_name,
    name_prefix: $name_prefix,
    name_suffix: $name_suffix,
    newsletter_subscribers: $newsletter_subscribers,
    orders: $orders,
    password: $password,
    payment_type: $payment_type,
    phone: $phone,
    product: $product,
    projects: $projects,
    quotes: $quotes,
    returns: $returns,
    short_description: $short_description,
    state: $state,
    tax_vat_number: $tax_vat_number,
    thumbnail: $thumbnail,
    username: $username,
    websites: $websites,
    workspaces: $workspaces,
    zipcode: $zipcode,
    }
  ) } {
    Address
    address_two
    comments
    confirmed_email
    country
    credit_memos
    customer_group
    customer_payment
    customer_since
    date_of_birth
    description
    email
    emails
    first_name
    gender
    id
    image
    last_name
    mediamanager
    messages
    middle_name
    name_prefix
    name_suffix
    newsletter_subscribers
    orders
    password
    payment_type
    phone
    product
    projects
    quotes
    returns
    short_description
    state
    tax_vat_number
    thumbnail
    username
    websites
    workspaces
    zipcode
  }`
