import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TicketingCreateInput } from "../../../inputs/TicketingCreateInput";
import { TicketingUpdateInput } from "../../../inputs/TicketingUpdateInput";
import { TicketingWhereUniqueInput } from "../../../inputs/TicketingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTicketingArgs {
  @TypeGraphQL.Field(_type => TicketingWhereUniqueInput, {
    nullable: false
  })
  where!: TicketingWhereUniqueInput;

  @TypeGraphQL.Field(_type => TicketingCreateInput, {
    nullable: false
  })
  create!: TicketingCreateInput;

  @TypeGraphQL.Field(_type => TicketingUpdateInput, {
    nullable: false
  })
  update!: TicketingUpdateInput;
}
