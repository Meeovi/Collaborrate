import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutCouponsInput } from "../inputs/ProductsCreateWithoutCouponsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateOrConnectWithoutCouponsInput", {
  isAbstract: true
})
export class ProductsCreateOrConnectWithoutCouponsInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutCouponsInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutCouponsInput;
}
