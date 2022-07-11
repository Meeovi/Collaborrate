import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutManufacturerInput } from "../inputs/ProductsCreateOrConnectWithoutManufacturerInput";
import { ProductsCreateWithoutManufacturerInput } from "../inputs/ProductsCreateWithoutManufacturerInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateNestedOneWithoutManufacturerInput", {
  isAbstract: true
})
export class ProductsCreateNestedOneWithoutManufacturerInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutManufacturerInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutManufacturerInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutManufacturerInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutManufacturerInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;
}
