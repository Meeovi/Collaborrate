import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutProduct_typesInput } from "../inputs/ProductsCreateOrConnectWithoutProduct_typesInput";
import { ProductsCreateWithoutProduct_typesInput } from "../inputs/ProductsCreateWithoutProduct_typesInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateNestedOneWithoutProduct_typesInput", {
  isAbstract: true
})
export class ProductsCreateNestedOneWithoutProduct_typesInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutProduct_typesInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutProduct_typesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutProduct_typesInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutProduct_typesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;
}
