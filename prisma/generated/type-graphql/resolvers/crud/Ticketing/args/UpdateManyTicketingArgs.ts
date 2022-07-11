import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TicketingUpdateManyMutationInput } from "../../../inputs/TicketingUpdateManyMutationInput";
import { TicketingWhereInput } from "../../../inputs/TicketingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTicketingArgs {
  @TypeGraphQL.Field(_type => TicketingUpdateManyMutationInput, {
    nullable: false
  })
  data!: TicketingUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TicketingWhereInput, {
    nullable: true
  })
  where?: TicketingWhereInput | undefined;
}
