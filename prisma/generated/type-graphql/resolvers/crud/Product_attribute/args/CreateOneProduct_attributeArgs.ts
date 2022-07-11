import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_attributeCreateInput } from "../../../inputs/Product_attributeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_attributeArgs {
  @TypeGraphQL.Field(_type => Product_attributeCreateInput, {
    nullable: false
  })
  data!: Product_attributeCreateInput;
}
