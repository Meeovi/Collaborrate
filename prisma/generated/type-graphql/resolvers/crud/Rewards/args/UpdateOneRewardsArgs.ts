import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RewardsUpdateInput } from "../../../inputs/RewardsUpdateInput";
import { RewardsWhereUniqueInput } from "../../../inputs/RewardsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneRewardsArgs {
  @TypeGraphQL.Field(_type => RewardsUpdateInput, {
    nullable: false
  })
  data!: RewardsUpdateInput;

  @TypeGraphQL.Field(_type => RewardsWhereUniqueInput, {
    nullable: false
  })
  where!: RewardsWhereUniqueInput;
}
