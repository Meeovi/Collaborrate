import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_categoryUpdateInput } from "../../../inputs/Tax_categoryUpdateInput";
import { Tax_categoryWhereUniqueInput } from "../../../inputs/Tax_categoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTax_categoryArgs {
  @TypeGraphQL.Field(_type => Tax_categoryUpdateInput, {
    nullable: false
  })
  data!: Tax_categoryUpdateInput;

  @TypeGraphQL.Field(_type => Tax_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Tax_categoryWhereUniqueInput;
}
