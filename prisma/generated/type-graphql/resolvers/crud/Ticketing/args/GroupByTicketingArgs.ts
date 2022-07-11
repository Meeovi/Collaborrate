import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TicketingOrderByWithAggregationInput } from "../../../inputs/TicketingOrderByWithAggregationInput";
import { TicketingScalarWhereWithAggregatesInput } from "../../../inputs/TicketingScalarWhereWithAggregatesInput";
import { TicketingWhereInput } from "../../../inputs/TicketingWhereInput";
import { TicketingScalarFieldEnum } from "../../../../enums/TicketingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTicketingArgs {
  @TypeGraphQL.Field(_type => TicketingWhereInput, {
    nullable: true
  })
  where?: TicketingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TicketingOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TicketingOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TicketingScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "created_at" | "name" | "location" | "date" | "severity" | "team" | "requester" | "requester_email" | "content" | "department" | "media" | "projects" | "ticket_type" | "comment" | "products" | "priority" | "status" | "resolution" | "assigned_to" | "date_modified" | "account_name" | "level">;

  @TypeGraphQL.Field(_type => TicketingScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TicketingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
