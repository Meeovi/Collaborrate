import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsCreateManyProductsInputEnvelope } from "../inputs/BrandsCreateManyProductsInputEnvelope";
import { BrandsCreateOrConnectWithoutProductsInput } from "../inputs/BrandsCreateOrConnectWithoutProductsInput";
import { BrandsCreateWithoutProductsInput } from "../inputs/BrandsCreateWithoutProductsInput";
import { BrandsWhereUniqueInput } from "../inputs/BrandsWhereUniqueInput";

@TypeGraphQL.InputType("BrandsCreateNestedManyWithoutProductsInput", {
  isAbstract: true
})
export class BrandsCreateNestedManyWithoutProductsInput {
  @TypeGraphQL.Field(_type => [BrandsCreateWithoutProductsInput], {
    nullable: true
  })
  create?: BrandsCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [BrandsCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: BrandsCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => BrandsCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: BrandsCreateManyProductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BrandsWhereUniqueInput], {
    nullable: true
  })
  connect?: BrandsWhereUniqueInput[] | undefined;
}
