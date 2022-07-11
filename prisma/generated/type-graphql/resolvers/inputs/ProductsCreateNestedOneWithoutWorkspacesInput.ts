import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutWorkspacesInput } from "../inputs/ProductsCreateOrConnectWithoutWorkspacesInput";
import { ProductsCreateWithoutWorkspacesInput } from "../inputs/ProductsCreateWithoutWorkspacesInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateNestedOneWithoutWorkspacesInput", {
  isAbstract: true
})
export class ProductsCreateNestedOneWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutWorkspacesInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutWorkspacesInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;
}
