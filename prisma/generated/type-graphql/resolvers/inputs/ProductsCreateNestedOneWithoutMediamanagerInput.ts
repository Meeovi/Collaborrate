import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutMediamanagerInput } from "../inputs/ProductsCreateOrConnectWithoutMediamanagerInput";
import { ProductsCreateWithoutMediamanagerInput } from "../inputs/ProductsCreateWithoutMediamanagerInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateNestedOneWithoutMediamanagerInput", {
  isAbstract: true
})
export class ProductsCreateNestedOneWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutMediamanagerInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutMediamanagerInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;
}
