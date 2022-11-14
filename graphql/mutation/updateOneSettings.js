import gql from 'graphql-tag'
export const updateOneSettings = gql`
mutation (
    data: {
    $address: NullableStringFieldUpdateOperationsInput!,
    $address_two: NullableStringFieldUpdateOperationsInput!,
    $allow_countries: NullableStringFieldUpdateOperationsInput!,
    $allow_state: NullableStringFieldUpdateOperationsInput!,
    $allowed_currency: NullableStringFieldUpdateOperationsInput!,
    $awsS3: NullableStringFieldUpdateOperationsInput!,
    $base_currency: NullableStringFieldUpdateOperationsInput!,
    $city: NullableStringFieldUpdateOperationsInput!,
    $country: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $databaseUrl: NullableStringFieldUpdateOperationsInput!,
    $default_country: NullableStringFieldUpdateOperationsInput!,
    $default_currency: NullableStringFieldUpdateOperationsInput!,
    $european_union_countries: NullableStringFieldUpdateOperationsInput!,
    $googleAnalytics: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $isPublic: NullableStringFieldUpdateOperationsInput!,
    $mailServer: NullableStringFieldUpdateOperationsInput!,
    $optional_zip: NullableStringFieldUpdateOperationsInput!,
    $region: NullableStringFieldUpdateOperationsInput!,
    $searchSetting: NullableStringFieldUpdateOperationsInput!,
    $sentryDsn: NullableStringFieldUpdateOperationsInput!,
    $siteName: NullableStringFieldUpdateOperationsInput!,
    $siteTagline: NullableStringFieldUpdateOperationsInput!,
    $siteWebsite: NullableStringFieldUpdateOperationsInput!,
    $state_required_for: NullableStringFieldUpdateOperationsInput!,
    $store_hours: NullableStringFieldUpdateOperationsInput!,
    $store_name: NullableStringFieldUpdateOperationsInput!,
    $store_phone: NullableStringFieldUpdateOperationsInput!,
    $top_destinations: NullableStringFieldUpdateOperationsInput!,
    $type: NullableStringFieldUpdateOperationsInput!,
    $vat_number: NullableStringFieldUpdateOperationsInput!,
    $zipcode: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $id: BigInt!,
    }
  ) {
updateOneSettings (
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
    where: {
    id: $id,
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
