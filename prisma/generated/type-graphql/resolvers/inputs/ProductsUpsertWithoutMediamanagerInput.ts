import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutMediamanagerInput } from "../inputs/ProductsCreateWithoutMediamanagerInput";
import { ProductsUpdateWithoutMediamanagerInput } from "../inputs/ProductsUpdateWithoutMediamanagerInput";

@TypeGraphQL.InputType("ProductsUpsertWithoutMediamanagerInput", {
  isAbstract: true
})
export class ProductsUpsertWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => ProductsUpdateWithoutMediamanagerInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutMediamanagerInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutMediamanagerInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutMediamanagerInput;
}
