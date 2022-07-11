import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutOrdersInput } from "../inputs/ProductsCreateWithoutOrdersInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateOrConnectWithoutOrdersInput", {
  isAbstract: true
})
export class ProductsCreateOrConnectWithoutOrdersInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutOrdersInput;
}
