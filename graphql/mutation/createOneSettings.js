import gql from 'graphql-tag'
export const createOneSettings = gql`
mutation (
    data: {
    $address: String!,
    $address_two: String!,
    $allow_countries: String!,
    $allow_state: String!,
    $allowed_currency: String!,
    $awsS3: String!,
    $base_currency: String!,
    $city: String!,
    $country: String!,
    $created_at: DateTime!,
    $databaseUrl: String!,
    $default_country: String!,
    $default_currency: String!,
    $european_union_countries: String!,
    $googleAnalytics: String!,
    $id: BigInt!,
    $isPublic: String!,
    $mailServer: String!,
    $optional_zip: String!,
    $region: String!,
    $searchSetting: String!,
    $sentryDsn: String!,
    $siteName: String!,
    $siteTagline: String!,
    $siteWebsite: String!,
    $state_required_for: String!,
    $store_hours: String!,
    $store_name: String!,
    $store_phone: String!,
    $top_destinations: String!,
    $type: String!,
    $vat_number: String!,
    $zipcode: String!,
    }
  ) {
createOneSettings (
    data: {
    address: $address,
    address_two: $address_two,
    allow_countries: $allow_countries,
    allow_state: $allow_state,
    allowed_currency: $allowed_currency,
    awsS3: $awsS3,
    base_currency: $base_currency,
    city: $city,
    country: $country,
    created_at: $created_at,
    databaseUrl: $databaseUrl,
    default_country: $default_country,
    default_currency: $default_currency,
    european_union_countries: $european_union_countries,
    googleAnalytics: $googleAnalytics,
    id: $id,
    isPublic: $isPublic,
    mailServer: $mailServer,
    optional_zip: $optional_zip,
    region: $region,
    searchSetting: $searchSetting,
    sentryDsn: $sentryDsn,
    siteName: $siteName,
    siteTagline: $siteTagline,
    siteWebsite: $siteWebsite,
    state_required_for: $state_required_for,
    store_hours: $store_hours,
    store_name: $store_name,
    store_phone: $store_phone,
    top_destinations: $top_destinations,
    type: $type,
    vat_number: $vat_number,
    zipcode: $zipcode,
    }
  ) } {
    address
    address_two
    allow_countries
    allow_state
    allowed_currency
    awsS3
    base_currency
    city
    country
    created_at
    databaseUrl
    default_country
    default_currency
    european_union_countries
    googleAnalytics
    id
    isPublic
    mailServer
    optional_zip
    region
    searchSetting
    sentryDsn
    siteName
    siteTagline
    siteWebsite
    state_required_for
    store_hours
    store_name
    store_phone
    top_destinations
    type
    vat_number
    zipcode
  }`
