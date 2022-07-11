import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateManyProductsInputEnvelope } from "../inputs/ProductsCreateManyProductsInputEnvelope";
import { ProductsCreateOrConnectWithoutProductsInput } from "../inputs/ProductsCreateOrConnectWithoutProductsInput";
import { ProductsCreateWithoutProductsInput } from "../inputs/ProductsCreateWithoutProductsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateNestedManyWithoutProductsInput", {
  isAbstract: true
})
export class ProductsCreateNestedManyWithoutProductsInput {
  @TypeGraphQL.Field(_type => [ProductsCreateWithoutProductsInput], {
    nullable: true
  })
  create?: ProductsCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: ProductsCreateManyProductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductsWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput[] | undefined;
}
