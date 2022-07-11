import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReturnsUpdateInput } from "../../../inputs/ReturnsUpdateInput";
import { ReturnsWhereUniqueInput } from "../../../inputs/ReturnsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneReturnsArgs {
  @TypeGraphQL.Field(_type => ReturnsUpdateInput, {
    nullable: false
  })
  data!: ReturnsUpdateInput;

  @TypeGraphQL.Field(_type => ReturnsWhereUniqueInput, {
    nullable: false
  })
  where!: ReturnsWhereUniqueInput;
}
