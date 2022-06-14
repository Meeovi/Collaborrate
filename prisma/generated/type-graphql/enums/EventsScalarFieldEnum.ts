import * as TypeGraphQL from "type-graphql";

export enum EventsScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  name = "name",
  content = "content",
  tickets = "tickets",
  image = "image",
  start = "start",
  end = "end",
  category = "category",
  city = "city",
  state = "state",
  country = "country",
  postalcode = "postalcode"
}
TypeGraphQL.registerEnumType(EventsScalarFieldEnum, {
  name: "EventsScalarFieldEnum",
  description: undefined,
});
