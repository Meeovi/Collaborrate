import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RewardsUpdateManyMutationInput } from "../../../inputs/RewardsUpdateManyMutationInput";
import { RewardsWhereInput } from "../../../inputs/RewardsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRewardsArgs {
  @TypeGraphQL.Field(_type => RewardsUpdateManyMutationInput, {
    nullable: false
  })
  data!: RewardsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RewardsWhereInput, {
    nullable: true
  })
  where?: RewardsWhereInput | undefined;
}
