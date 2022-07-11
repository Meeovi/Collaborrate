import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RewardsWhereInput } from "../../../inputs/RewardsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRewardsArgs {
  @TypeGraphQL.Field(_type => RewardsWhereInput, {
    nullable: true
  })
  where?: RewardsWhereInput | undefined;
}
