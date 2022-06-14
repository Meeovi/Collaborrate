import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutOccassions_occassionsToproductsInput } from "../inputs/ProductsCreateWithoutOccassions_occassionsToproductsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateOrConnectWithoutOccassions_occassionsToproductsInput", {
  isAbstract: true
})
export class ProductsCreateOrConnectWithoutOccassions_occassionsToproductsInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutOccassions_occassionsToproductsInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutOccassions_occassionsToproductsInput;
}
