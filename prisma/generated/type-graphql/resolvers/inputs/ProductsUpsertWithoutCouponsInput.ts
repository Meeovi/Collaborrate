import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutCouponsInput } from "../inputs/ProductsCreateWithoutCouponsInput";
import { ProductsUpdateWithoutCouponsInput } from "../inputs/ProductsUpdateWithoutCouponsInput";

@TypeGraphQL.InputType("ProductsUpsertWithoutCouponsInput", {
  isAbstract: true
})
export class ProductsUpsertWithoutCouponsInput {
  @TypeGraphQL.Field(_type => ProductsUpdateWithoutCouponsInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutCouponsInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutCouponsInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutCouponsInput;
}
