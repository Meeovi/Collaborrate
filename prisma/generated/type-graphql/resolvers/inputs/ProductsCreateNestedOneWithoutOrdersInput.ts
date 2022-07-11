import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutOrdersInput } from "../inputs/ProductsCreateOrConnectWithoutOrdersInput";
import { ProductsCreateWithoutOrdersInput } from "../inputs/ProductsCreateWithoutOrdersInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateNestedOneWithoutOrdersInput", {
  isAbstract: true
})
export class ProductsCreateNestedOneWithoutOrdersInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutOrdersInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutOrdersInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;
}
