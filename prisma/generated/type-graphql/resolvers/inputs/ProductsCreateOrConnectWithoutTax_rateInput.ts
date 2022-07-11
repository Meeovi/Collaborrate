import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutTax_rateInput } from "../inputs/ProductsCreateWithoutTax_rateInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateOrConnectWithoutTax_rateInput", {
  isAbstract: true
})
export class ProductsCreateOrConnectWithoutTax_rateInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutTax_rateInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutTax_rateInput;
}
