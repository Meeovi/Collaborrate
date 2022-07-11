import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReturnsCreateInput } from "../../../inputs/ReturnsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneReturnsArgs {
  @TypeGraphQL.Field(_type => ReturnsCreateInput, {
    nullable: false
  })
  data!: ReturnsCreateInput;
}
