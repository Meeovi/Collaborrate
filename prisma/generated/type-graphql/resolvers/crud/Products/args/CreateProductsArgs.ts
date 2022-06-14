import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductsCreateInput } from "../../../inputs/ProductsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProductsArgs {
  @TypeGraphQL.Field(_type => ProductsCreateInput, {
    nullable: false
  })
  data!: ProductsCreateInput;
}
