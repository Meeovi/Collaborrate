import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReturnsCreateInput } from "../../../inputs/ReturnsCreateInput";
import { ReturnsUpdateInput } from "../../../inputs/ReturnsUpdateInput";
import { ReturnsWhereUniqueInput } from "../../../inputs/ReturnsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertReturnsArgs {
  @TypeGraphQL.Field(_type => ReturnsWhereUniqueInput, {
    nullable: false
  })
  where!: ReturnsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReturnsCreateInput, {
    nullable: false
  })
  create!: ReturnsCreateInput;

  @TypeGraphQL.Field(_type => ReturnsUpdateInput, {
    nullable: false
  })
  update!: ReturnsUpdateInput;
}
