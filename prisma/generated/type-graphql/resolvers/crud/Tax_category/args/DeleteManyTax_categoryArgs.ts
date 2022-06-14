import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_categoryWhereInput } from "../../../inputs/Tax_categoryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTax_categoryArgs {
  @TypeGraphQL.Field(_type => Tax_categoryWhereInput, {
    nullable: true
  })
  where?: Tax_categoryWhereInput | undefined;
}
