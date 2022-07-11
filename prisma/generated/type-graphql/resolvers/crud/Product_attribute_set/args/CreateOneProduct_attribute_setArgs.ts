import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_attribute_setCreateInput } from "../../../inputs/Product_attribute_setCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_attribute_setArgs {
  @TypeGraphQL.Field(_type => Product_attribute_setCreateInput, {
    nullable: false
  })
  data!: Product_attribute_setCreateInput;
}
