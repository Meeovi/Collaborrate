import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RewardsWhereUniqueInput } from "../../../inputs/RewardsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteRewardsArgs {
  @TypeGraphQL.Field(_type => RewardsWhereUniqueInput, {
    nullable: false
  })
  where!: RewardsWhereUniqueInput;
}
