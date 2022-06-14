import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutQuotesInput } from "../inputs/ProductsCreateWithoutQuotesInput";
import { ProductsUpdateWithoutQuotesInput } from "../inputs/ProductsUpdateWithoutQuotesInput";

@TypeGraphQL.InputType("ProductsUpsertWithoutQuotesInput", {
  isAbstract: true
})
export class ProductsUpsertWithoutQuotesInput {
  @TypeGraphQL.Field(_type => ProductsUpdateWithoutQuotesInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutQuotesInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutQuotesInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutQuotesInput;
}
