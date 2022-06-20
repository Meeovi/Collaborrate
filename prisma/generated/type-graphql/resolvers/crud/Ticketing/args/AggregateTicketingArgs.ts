import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TicketingOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TicketingOrderByWithRelationAndSearchRelevanceInput";
import { TicketingWhereInput } from "../../../inputs/TicketingWhereInput";
import { TicketingWhereUniqueInput } from "../../../inputs/TicketingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTicketingArgs {
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
}
