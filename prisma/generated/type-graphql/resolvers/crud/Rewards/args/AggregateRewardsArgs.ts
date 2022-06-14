import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RewardsOrderByWithRelationInput } from "../../../inputs/RewardsOrderByWithRelationInput";
import { RewardsWhereInput } from "../../../inputs/RewardsWhereInput";
import { RewardsWhereUniqueInput } from "../../../inputs/RewardsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRewardsArgs {
  @TypeGraphQL.Field(_type => RewardsWhereInput, {
    nullable: true
  })
  where?: RewardsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RewardsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: RewardsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => RewardsWhereUniqueInput, {
    nullable: true
  })
  cursor?: RewardsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
