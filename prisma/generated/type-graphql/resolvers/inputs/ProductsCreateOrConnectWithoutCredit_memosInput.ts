import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutCredit_memosInput } from "../inputs/ProductsCreateWithoutCredit_memosInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateOrConnectWithoutCredit_memosInput", {
  isAbstract: true
})
export class ProductsCreateOrConnectWithoutCredit_memosInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutCredit_memosInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutCredit_memosInput;
}
