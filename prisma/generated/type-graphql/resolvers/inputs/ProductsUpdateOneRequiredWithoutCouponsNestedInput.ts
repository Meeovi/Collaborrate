import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutCouponsInput } from "../inputs/ProductsCreateOrConnectWithoutCouponsInput";
import { ProductsCreateWithoutCouponsInput } from "../inputs/ProductsCreateWithoutCouponsInput";
import { ProductsUpdateWithoutCouponsInput } from "../inputs/ProductsUpdateWithoutCouponsInput";
import { ProductsUpsertWithoutCouponsInput } from "../inputs/ProductsUpsertWithoutCouponsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateOneRequiredWithoutCouponsNestedInput", {
  isAbstract: true
})
export class ProductsUpdateOneRequiredWithoutCouponsNestedInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutCouponsInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutCouponsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutCouponsInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutCouponsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpsertWithoutCouponsInput, {
    nullable: true
  })
  upsert?: ProductsUpsertWithoutCouponsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutCouponsInput, {
    nullable: true
  })
  update?: ProductsUpdateWithoutCouponsInput | undefined;
}
