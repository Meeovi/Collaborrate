import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Special_discountsUpdateManyMutationInput } from "../../../inputs/Special_discountsUpdateManyMutationInput";
import { Special_discountsWhereInput } from "../../../inputs/Special_discountsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySpecial_discountsArgs {
  @TypeGraphQL.Field(_type => Special_discountsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Special_discountsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Special_discountsWhereInput, {
    nullable: true
  })
  where?: Special_discountsWhereInput | undefined;
}
