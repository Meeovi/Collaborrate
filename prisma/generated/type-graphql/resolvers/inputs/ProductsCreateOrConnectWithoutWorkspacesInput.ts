import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutWorkspacesInput } from "../inputs/ProductsCreateWithoutWorkspacesInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateOrConnectWithoutWorkspacesInput", {
  isAbstract: true
})
export class ProductsCreateOrConnectWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutWorkspacesInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutWorkspacesInput;
}
