import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutProduct_attributeInput } from "../inputs/ProductsCreateOrConnectWithoutProduct_attributeInput";
import { ProductsCreateWithoutProduct_attributeInput } from "../inputs/ProductsCreateWithoutProduct_attributeInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateNestedOneWithoutProduct_attributeInput", {
  isAbstract: true
})
export class ProductsCreateNestedOneWithoutProduct_attributeInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutProduct_attributeInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutProduct_attributeInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutProduct_attributeInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutProduct_attributeInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;
}
