import * as TypeGraphQL from "type-graphql";

export enum EventsOrderByRelevanceFieldEnum {
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
TypeGraphQL.registerEnumType(EventsOrderByRelevanceFieldEnum, {
  name: "EventsOrderByRelevanceFieldEnum",
  description: undefined,
});
