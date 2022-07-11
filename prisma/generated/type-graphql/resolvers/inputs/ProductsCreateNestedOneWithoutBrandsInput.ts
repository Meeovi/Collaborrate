import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutBrandsInput } from "../inputs/ProductsCreateOrConnectWithoutBrandsInput";
import { ProductsCreateWithoutBrandsInput } from "../inputs/ProductsCreateWithoutBrandsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateNestedOneWithoutBrandsInput", {
  isAbstract: true
})
export class ProductsCreateNestedOneWithoutBrandsInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutBrandsInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutBrandsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutBrandsInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutBrandsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;
}
