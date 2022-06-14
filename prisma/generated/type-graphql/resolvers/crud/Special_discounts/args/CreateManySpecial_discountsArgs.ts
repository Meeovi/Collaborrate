import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Special_discountsCreateManyInput } from "../../../inputs/Special_discountsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySpecial_discountsArgs {
  @TypeGraphQL.Field(_type => [Special_discountsCreateManyInput], {
    nullable: false
  })
  data!: Special_discountsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
