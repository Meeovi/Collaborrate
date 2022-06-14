import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductsCreateInput } from "../../../inputs/ProductsCreateInput";
import { ProductsUpdateInput } from "../../../inputs/ProductsUpdateInput";
import { ProductsWhereUniqueInput } from "../../../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertProductsArgs {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsCreateInput, {
    nullable: false
  })
  create!: ProductsCreateInput;

  @TypeGraphQL.Field(_type => ProductsUpdateInput, {
    nullable: false
  })
  update!: ProductsUpdateInput;
}
