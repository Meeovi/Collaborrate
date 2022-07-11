import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutTax_rateInput } from "../inputs/ProductsCreateOrConnectWithoutTax_rateInput";
import { ProductsCreateWithoutTax_rateInput } from "../inputs/ProductsCreateWithoutTax_rateInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateNestedOneWithoutTax_rateInput", {
  isAbstract: true
})
export class ProductsCreateNestedOneWithoutTax_rateInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutTax_rateInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutTax_rateInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutTax_rateInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutTax_rateInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;
}
