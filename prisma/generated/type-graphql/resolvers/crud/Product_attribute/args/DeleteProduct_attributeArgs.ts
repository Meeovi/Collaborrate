import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_attributeWhereUniqueInput } from "../../../inputs/Product_attributeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteProduct_attributeArgs {
  @TypeGraphQL.Field(_type => Product_attributeWhereUniqueInput, {
    nullable: false
  })
  where!: Product_attributeWhereUniqueInput;
}
