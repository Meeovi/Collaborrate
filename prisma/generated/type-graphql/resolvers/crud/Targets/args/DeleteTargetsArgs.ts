import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TargetsWhereUniqueInput } from "../../../inputs/TargetsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTargetsArgs {
  @TypeGraphQL.Field(_type => TargetsWhereUniqueInput, {
    nullable: false
  })
  where!: TargetsWhereUniqueInput;
}
