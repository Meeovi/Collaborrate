import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TicketingUpdateInput } from "../../../inputs/TicketingUpdateInput";
import { TicketingWhereUniqueInput } from "../../../inputs/TicketingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTicketingArgs {
  @TypeGraphQL.Field(_type => TicketingUpdateInput, {
    nullable: false
  })
  data!: TicketingUpdateInput;

  @TypeGraphQL.Field(_type => TicketingWhereUniqueInput, {
    nullable: false
  })
  where!: TicketingWhereUniqueInput;
}
