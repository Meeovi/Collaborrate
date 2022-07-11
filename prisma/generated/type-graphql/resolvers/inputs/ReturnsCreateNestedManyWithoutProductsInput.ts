import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReturnsCreateManyProductsInputEnvelope } from "../inputs/ReturnsCreateManyProductsInputEnvelope";
import { ReturnsCreateOrConnectWithoutProductsInput } from "../inputs/ReturnsCreateOrConnectWithoutProductsInput";
import { ReturnsCreateWithoutProductsInput } from "../inputs/ReturnsCreateWithoutProductsInput";
import { ReturnsWhereUniqueInput } from "../inputs/ReturnsWhereUniqueInput";

@TypeGraphQL.InputType("ReturnsCreateNestedManyWithoutProductsInput", {
  isAbstract: true
})
export class ReturnsCreateNestedManyWithoutProductsInput {
  @TypeGraphQL.Field(_type => [ReturnsCreateWithoutProductsInput], {
    nullable: true
  })
  create?: ReturnsCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReturnsCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: ReturnsCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => ReturnsCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: ReturnsCreateManyProductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReturnsWhereUniqueInput], {
    nullable: true
  })
  connect?: ReturnsWhereUniqueInput[] | undefined;
}
