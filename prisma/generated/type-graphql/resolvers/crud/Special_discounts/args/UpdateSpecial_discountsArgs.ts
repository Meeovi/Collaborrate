import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Special_discountsUpdateInput } from "../../../inputs/Special_discountsUpdateInput";
import { Special_discountsWhereUniqueInput } from "../../../inputs/Special_discountsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSpecial_discountsArgs {
  @TypeGraphQL.Field(_type => Special_discountsUpdateInput, {
    nullable: false
  })
  data!: Special_discountsUpdateInput;

  @TypeGraphQL.Field(_type => Special_discountsWhereUniqueInput, {
    nullable: false
  })
  where!: Special_discountsWhereUniqueInput;
}
