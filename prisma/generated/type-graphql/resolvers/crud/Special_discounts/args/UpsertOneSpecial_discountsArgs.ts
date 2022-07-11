import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Special_discountsCreateInput } from "../../../inputs/Special_discountsCreateInput";
import { Special_discountsUpdateInput } from "../../../inputs/Special_discountsUpdateInput";
import { Special_discountsWhereUniqueInput } from "../../../inputs/Special_discountsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSpecial_discountsArgs {
  @TypeGraphQL.Field(_type => Special_discountsWhereUniqueInput, {
    nullable: false
  })
  where!: Special_discountsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Special_discountsCreateInput, {
    nullable: false
  })
  create!: Special_discountsCreateInput;

  @TypeGraphQL.Field(_type => Special_discountsUpdateInput, {
    nullable: false
  })
  update!: Special_discountsUpdateInput;
}
