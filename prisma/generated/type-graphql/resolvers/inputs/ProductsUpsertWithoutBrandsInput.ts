import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutBrandsInput } from "../inputs/ProductsCreateWithoutBrandsInput";
import { ProductsUpdateWithoutBrandsInput } from "../inputs/ProductsUpdateWithoutBrandsInput";

@TypeGraphQL.InputType("ProductsUpsertWithoutBrandsInput", {
  isAbstract: true
})
export class ProductsUpsertWithoutBrandsInput {
  @TypeGraphQL.Field(_type => ProductsUpdateWithoutBrandsInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutBrandsInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutBrandsInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutBrandsInput;
}
