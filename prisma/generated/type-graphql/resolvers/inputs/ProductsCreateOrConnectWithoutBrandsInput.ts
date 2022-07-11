import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutBrandsInput } from "../inputs/ProductsCreateWithoutBrandsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateOrConnectWithoutBrandsInput", {
  isAbstract: true
})
export class ProductsCreateOrConnectWithoutBrandsInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutBrandsInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutBrandsInput;
}
