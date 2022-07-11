import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutManufacturerInput } from "../inputs/ProductsCreateWithoutManufacturerInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateOrConnectWithoutManufacturerInput", {
  isAbstract: true
})
export class ProductsCreateOrConnectWithoutManufacturerInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutManufacturerInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutManufacturerInput;
}
