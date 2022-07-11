import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_typesCreateManyProductsInputEnvelope } from "../inputs/Product_typesCreateManyProductsInputEnvelope";
import { Product_typesCreateOrConnectWithoutProductsInput } from "../inputs/Product_typesCreateOrConnectWithoutProductsInput";
import { Product_typesCreateWithoutProductsInput } from "../inputs/Product_typesCreateWithoutProductsInput";
import { Product_typesWhereUniqueInput } from "../inputs/Product_typesWhereUniqueInput";

@TypeGraphQL.InputType("Product_typesCreateNestedManyWithoutProductsInput", {
  isAbstract: true
})
export class Product_typesCreateNestedManyWithoutProductsInput {
  @TypeGraphQL.Field(_type => [Product_typesCreateWithoutProductsInput], {
    nullable: true
  })
  create?: Product_typesCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_typesCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: Product_typesCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_typesCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: Product_typesCreateManyProductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_typesWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_typesWhereUniqueInput[] | undefined;
}
