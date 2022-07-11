import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutOrdersInput } from "../inputs/ProductsCreateWithoutOrdersInput";
import { ProductsUpdateWithoutOrdersInput } from "../inputs/ProductsUpdateWithoutOrdersInput";

@TypeGraphQL.InputType("ProductsUpsertWithoutOrdersInput", {
  isAbstract: true
})
export class ProductsUpsertWithoutOrdersInput {
  @TypeGraphQL.Field(_type => ProductsUpdateWithoutOrdersInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutOrdersInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutOrdersInput;
}
