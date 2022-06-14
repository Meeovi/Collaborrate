import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutQuotesInput } from "../inputs/ProductsCreateWithoutQuotesInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateOrConnectWithoutQuotesInput", {
  isAbstract: true
})
export class ProductsCreateOrConnectWithoutQuotesInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutQuotesInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutQuotesInput;
}
