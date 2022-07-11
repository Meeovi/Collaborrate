import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutWorkspacesInput } from "../inputs/ProductsCreateWithoutWorkspacesInput";
import { ProductsUpdateWithoutWorkspacesInput } from "../inputs/ProductsUpdateWithoutWorkspacesInput";

@TypeGraphQL.InputType("ProductsUpsertWithoutWorkspacesInput", {
  isAbstract: true
})
export class ProductsUpsertWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => ProductsUpdateWithoutWorkspacesInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutWorkspacesInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutWorkspacesInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutWorkspacesInput;
}
