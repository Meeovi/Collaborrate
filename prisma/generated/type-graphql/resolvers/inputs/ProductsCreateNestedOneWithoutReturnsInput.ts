import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutReturnsInput } from "../inputs/ProductsCreateOrConnectWithoutReturnsInput";
import { ProductsCreateWithoutReturnsInput } from "../inputs/ProductsCreateWithoutReturnsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateNestedOneWithoutReturnsInput", {
  isAbstract: true
})
export class ProductsCreateNestedOneWithoutReturnsInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutReturnsInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutReturnsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutReturnsInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutReturnsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;
}
