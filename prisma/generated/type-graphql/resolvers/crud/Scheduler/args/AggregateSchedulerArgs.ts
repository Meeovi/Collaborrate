import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SchedulerOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SchedulerOrderByWithRelationAndSearchRelevanceInput";
import { SchedulerWhereInput } from "../../../inputs/SchedulerWhereInput";
import { SchedulerWhereUniqueInput } from "../../../inputs/SchedulerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSchedulerArgs {
  @TypeGraphQL.Field(_type => SchedulerWhereInput, {
    nullable: true
  })
  where?: SchedulerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SchedulerOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: SchedulerOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => SchedulerWhereUniqueInput, {
    nullable: true
  })
  cursor?: SchedulerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
