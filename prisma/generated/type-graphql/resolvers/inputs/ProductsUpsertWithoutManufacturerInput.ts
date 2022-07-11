import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutManufacturerInput } from "../inputs/ProductsCreateWithoutManufacturerInput";
import { ProductsUpdateWithoutManufacturerInput } from "../inputs/ProductsUpdateWithoutManufacturerInput";

@TypeGraphQL.InputType("ProductsUpsertWithoutManufacturerInput", {
  isAbstract: true
})
export class ProductsUpsertWithoutManufacturerInput {
  @TypeGraphQL.Field(_type => ProductsUpdateWithoutManufacturerInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutManufacturerInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutManufacturerInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutManufacturerInput;
}
