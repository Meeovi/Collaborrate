import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TicketingOrderByWithRelationInput } from "../../../inputs/TicketingOrderByWithRelationInput";
import { TicketingWhereInput } from "../../../inputs/TicketingWhereInput";
import { TicketingWhereUniqueInput } from "../../../inputs/TicketingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTicketingArgs {
  @TypeGraphQL.Field(_type => TicketingWhereInput, {
    nullable: true
  })
  where?: TicketingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TicketingOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TicketingOrderByWithRelationInput[] | undefined;

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
}
