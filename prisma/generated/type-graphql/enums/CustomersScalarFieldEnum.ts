import * as TypeGraphQL from "type-graphql";

export enum CustomersScalarFieldEnum {
  id = "id",
  thumbnail = "thumbnail",
  name_prefix = "name_prefix",
  first_name = "first_name",
  middle_name = "middle_name",
  last_name = "last_name",
  email = "email",
  customer_group = "customer_group",
  phone = "phone",
  zipcode = "zipcode",
  name_suffix = "name_suffix",
  websites = "websites",
  product = "product",
  country = "country",
  state = "state",
  customer_since = "customer_since",
  confirmed_email = "confirmed_email",
  date_of_birth = "date_of_birth",
  tax_vat_number = "tax_vat_number",
  gender = "gender",
  description = "description",
  short_description = "short_description",
  image = "image",
  Address = "Address",
  address_two = "address_two",
  payment_type = "payment_type",
  username = "username",
  password = "password"
}
TypeGraphQL.registerEnumType(CustomersScalarFieldEnum, {
  name: "CustomersScalarFieldEnum",
  description: undefined,
});