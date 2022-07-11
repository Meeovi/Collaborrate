import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutMediamanagerInput } from "../inputs/ProductsCreateWithoutMediamanagerInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateOrConnectWithoutMediamanagerInput", {
  isAbstract: true
})
export class ProductsCreateOrConnectWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutMediamanagerInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutMediamanagerInput;
}
