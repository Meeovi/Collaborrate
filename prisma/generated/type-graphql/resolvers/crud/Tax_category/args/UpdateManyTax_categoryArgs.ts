import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_categoryUpdateManyMutationInput } from "../../../inputs/Tax_categoryUpdateManyMutationInput";
import { Tax_categoryWhereInput } from "../../../inputs/Tax_categoryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTax_categoryArgs {
  @TypeGraphQL.Field(_type => Tax_categoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: Tax_categoryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Tax_categoryWhereInput, {
    nullable: true
  })
  where?: Tax_categoryWhereInput | undefined;
}
