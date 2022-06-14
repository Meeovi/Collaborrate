import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutCouponsInput } from "../inputs/ProductsCreateOrConnectWithoutCouponsInput";
import { ProductsCreateWithoutCouponsInput } from "../inputs/ProductsCreateWithoutCouponsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateNestedOneWithoutCouponsInput", {
  isAbstract: true
})
export class ProductsCreateNestedOneWithoutCouponsInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutCouponsInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutCouponsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutCouponsInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutCouponsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;
}
