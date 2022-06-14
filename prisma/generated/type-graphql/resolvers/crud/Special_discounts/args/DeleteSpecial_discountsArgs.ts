import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Special_discountsWhereUniqueInput } from "../../../inputs/Special_discountsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSpecial_discountsArgs {
  @TypeGraphQL.Field(_type => Special_discountsWhereUniqueInput, {
    nullable: false
  })
  where!: Special_discountsWhereUniqueInput;
}
