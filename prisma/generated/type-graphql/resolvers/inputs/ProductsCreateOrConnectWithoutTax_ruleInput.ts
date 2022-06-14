import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutTax_ruleInput } from "../inputs/ProductsCreateWithoutTax_ruleInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateOrConnectWithoutTax_ruleInput", {
  isAbstract: true
})
export class ProductsCreateOrConnectWithoutTax_ruleInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutTax_ruleInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutTax_ruleInput;
}
