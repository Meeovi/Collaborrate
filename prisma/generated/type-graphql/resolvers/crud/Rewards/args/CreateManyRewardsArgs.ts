import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RewardsCreateManyInput } from "../../../inputs/RewardsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRewardsArgs {
  @TypeGraphQL.Field(_type => [RewardsCreateManyInput], {
    nullable: false
  })
  data!: RewardsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
