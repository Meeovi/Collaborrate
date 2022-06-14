import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Special_discountsWhereInput } from "../../../inputs/Special_discountsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySpecial_discountsArgs {
  @TypeGraphQL.Field(_type => Special_discountsWhereInput, {
    nullable: true
  })
  where?: Special_discountsWhereInput | undefined;
}
