import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RewardsCreateInput } from "../../../inputs/RewardsCreateInput";
import { RewardsUpdateInput } from "../../../inputs/RewardsUpdateInput";
import { RewardsWhereUniqueInput } from "../../../inputs/RewardsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertRewardsArgs {
  @TypeGraphQL.Field(_type => RewardsWhereUniqueInput, {
    nullable: false
  })
  where!: RewardsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RewardsCreateInput, {
    nullable: false
  })
  create!: RewardsCreateInput;

  @TypeGraphQL.Field(_type => RewardsUpdateInput, {
    nullable: false
  })
  update!: RewardsUpdateInput;
}
