import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_categoryWhereUniqueInput } from "../../../inputs/Tax_categoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTax_categoryArgs {
  @TypeGraphQL.Field(_type => Tax_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Tax_categoryWhereUniqueInput;
}
