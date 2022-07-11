import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_categoryCreateInput } from "../../../inputs/Tax_categoryCreateInput";
import { Tax_categoryUpdateInput } from "../../../inputs/Tax_categoryUpdateInput";
import { Tax_categoryWhereUniqueInput } from "../../../inputs/Tax_categoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTax_categoryArgs {
  @TypeGraphQL.Field(_type => Tax_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Tax_categoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Tax_categoryCreateInput, {
    nullable: false
  })
  create!: Tax_categoryCreateInput;

  @TypeGraphQL.Field(_type => Tax_categoryUpdateInput, {
    nullable: false
  })
  update!: Tax_categoryUpdateInput;
}
