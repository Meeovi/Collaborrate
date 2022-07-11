import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutOccassions_occassionsToproductsInput } from "../inputs/ProductsCreateWithoutOccassions_occassionsToproductsInput";
import { ProductsUpdateWithoutOccassions_occassionsToproductsInput } from "../inputs/ProductsUpdateWithoutOccassions_occassionsToproductsInput";

@TypeGraphQL.InputType("ProductsUpsertWithoutOccassions_occassionsToproductsInput", {
  isAbstract: true
})
export class ProductsUpsertWithoutOccassions_occassionsToproductsInput {
  @TypeGraphQL.Field(_type => ProductsUpdateWithoutOccassions_occassionsToproductsInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutOccassions_occassionsToproductsInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutOccassions_occassionsToproductsInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutOccassions_occassionsToproductsInput;
}
