import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TicketingWhereInput } from "../../../inputs/TicketingWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTicketingArgs {
  @TypeGraphQL.Field(_type => TicketingWhereInput, {
    nullable: true
  })
  where?: TicketingWhereInput | undefined;
}
