import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EventsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/EventsOrderByWithRelationAndSearchRelevanceInput";
import { EventsWhereInput } from "../../../inputs/EventsWhereInput";
import { EventsWhereUniqueInput } from "../../../inputs/EventsWhereUniqueInput";
import { EventsScalarFieldEnum } from "../../../../enums/EventsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyEventsArgs {
  @TypeGraphQL.Field(_type => EventsWhereInput, {
    nullable: true
  })
  where?: EventsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EventsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: EventsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => EventsWhereUniqueInput, {
    nullable: true
  })
  cursor?: EventsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EventsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "content" | "tickets" | "image" | "start" | "end" | "category" | "city" | "state" | "country" | "postalcode"> | undefined;
}
