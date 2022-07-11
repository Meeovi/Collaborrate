import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutProduct_typesInput } from "../inputs/ProductsCreateWithoutProduct_typesInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateOrConnectWithoutProduct_typesInput", {
  isAbstract: true
})
export class ProductsCreateOrConnectWithoutProduct_typesInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutProduct_typesInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutProduct_typesInput;
}
