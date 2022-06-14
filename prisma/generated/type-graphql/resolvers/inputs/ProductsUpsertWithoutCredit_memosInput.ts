import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutCredit_memosInput } from "../inputs/ProductsCreateWithoutCredit_memosInput";
import { ProductsUpdateWithoutCredit_memosInput } from "../inputs/ProductsUpdateWithoutCredit_memosInput";

@TypeGraphQL.InputType("ProductsUpsertWithoutCredit_memosInput", {
  isAbstract: true
})
export class ProductsUpsertWithoutCredit_memosInput {
  @TypeGraphQL.Field(_type => ProductsUpdateWithoutCredit_memosInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutCredit_memosInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutCredit_memosInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutCredit_memosInput;
}
