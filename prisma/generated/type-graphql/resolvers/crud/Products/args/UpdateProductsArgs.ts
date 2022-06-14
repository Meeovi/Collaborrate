import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductsUpdateInput } from "../../../inputs/ProductsUpdateInput";
import { ProductsWhereUniqueInput } from "../../../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProductsArgs {
  @TypeGraphQL.Field(_type => ProductsUpdateInput, {
    nullable: false
  })
  data!: ProductsUpdateInput;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;
}
