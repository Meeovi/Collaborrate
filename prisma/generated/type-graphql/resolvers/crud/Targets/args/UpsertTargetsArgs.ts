import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TargetsCreateInput } from "../../../inputs/TargetsCreateInput";
import { TargetsUpdateInput } from "../../../inputs/TargetsUpdateInput";
import { TargetsWhereUniqueInput } from "../../../inputs/TargetsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTargetsArgs {
  @TypeGraphQL.Field(_type => TargetsWhereUniqueInput, {
    nullable: false
  })
  where!: TargetsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TargetsCreateInput, {
    nullable: false
  })
  create!: TargetsCreateInput;

  @TypeGraphQL.Field(_type => TargetsUpdateInput, {
    nullable: false
  })
  update!: TargetsUpdateInput;
}
