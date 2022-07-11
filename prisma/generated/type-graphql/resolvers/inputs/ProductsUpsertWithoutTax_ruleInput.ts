import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutTax_ruleInput } from "../inputs/ProductsCreateWithoutTax_ruleInput";
import { ProductsUpdateWithoutTax_ruleInput } from "../inputs/ProductsUpdateWithoutTax_ruleInput";

@TypeGraphQL.InputType("ProductsUpsertWithoutTax_ruleInput", {
  isAbstract: true
})
export class ProductsUpsertWithoutTax_ruleInput {
  @TypeGraphQL.Field(_type => ProductsUpdateWithoutTax_ruleInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutTax_ruleInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutTax_ruleInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutTax_ruleInput;
}
