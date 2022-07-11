import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Special_discountsCreateInput } from "../../../inputs/Special_discountsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSpecial_discountsArgs {
  @TypeGraphQL.Field(_type => Special_discountsCreateInput, {
    nullable: false
  })
  data!: Special_discountsCreateInput;
}
