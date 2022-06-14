import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TargetsUpdateInput } from "../../../inputs/TargetsUpdateInput";
import { TargetsWhereUniqueInput } from "../../../inputs/TargetsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTargetsArgs {
  @TypeGraphQL.Field(_type => TargetsUpdateInput, {
    nullable: false
  })
  data!: TargetsUpdateInput;

  @TypeGraphQL.Field(_type => TargetsWhereUniqueInput, {
    nullable: false
  })
  where!: TargetsWhereUniqueInput;
}
