import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TicketingOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TicketingOrderByWithRelationAndSearchRelevanceInput";
import { TicketingWhereInput } from "../../../inputs/TicketingWhereInput";
import { TicketingWhereUniqueInput } from "../../../inputs/TicketingWhereUniqueInput";
import { TicketingScalarFieldEnum } from "../../../../enums/TicketingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTicketingArgs {
  @TypeGraphQL.Field(_type => TicketingWhereInput, {
    nullable: true
  })
  where?: TicketingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TicketingOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: TicketingOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => TicketingWhereUniqueInput, {
    nullable: true
  })
  cursor?: TicketingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TicketingScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "location" | "date" | "severity" | "team" | "requester" | "requester_email" | "content" | "department" | "media" | "projects" | "ticket_type" | "comment" | "products" | "priority" | "status" | "resolution" | "assigned_to" | "date_modified" | "account_name" | "level"> | undefined;
}
