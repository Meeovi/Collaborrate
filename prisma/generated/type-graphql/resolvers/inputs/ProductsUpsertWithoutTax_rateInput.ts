import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutTax_rateInput } from "../inputs/ProductsCreateWithoutTax_rateInput";
import { ProductsUpdateWithoutTax_rateInput } from "../inputs/ProductsUpdateWithoutTax_rateInput";

@TypeGraphQL.InputType("ProductsUpsertWithoutTax_rateInput", {
  isAbstract: true
})
export class ProductsUpsertWithoutTax_rateInput {
  @TypeGraphQL.Field(_type => ProductsUpdateWithoutTax_rateInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutTax_rateInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutTax_rateInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutTax_rateInput;
}
