import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReturnsCreateManyCustomersInputEnvelope } from "../inputs/ReturnsCreateManyCustomersInputEnvelope";
import { ReturnsCreateOrConnectWithoutCustomersInput } from "../inputs/ReturnsCreateOrConnectWithoutCustomersInput";
import { ReturnsCreateWithoutCustomersInput } from "../inputs/ReturnsCreateWithoutCustomersInput";
import { ReturnsWhereUniqueInput } from "../inputs/ReturnsWhereUniqueInput";

@TypeGraphQL.InputType("ReturnsCreateNestedManyWithoutCustomersInput", {
  isAbstract: true
})
export class ReturnsCreateNestedManyWithoutCustomersInput {
  @TypeGraphQL.Field(_type => [ReturnsCreateWithoutCustomersInput], {
    nullable: true
  })
  create?: ReturnsCreateWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReturnsCreateOrConnectWithoutCustomersInput], {
    nullable: true
  })
  connectOrCreate?: ReturnsCreateOrConnectWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => ReturnsCreateManyCustomersInputEnvelope, {
    nullable: true
  })
  createMany?: ReturnsCreateManyCustomersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReturnsWhereUniqueInput], {
    nullable: true
  })
  connect?: ReturnsWhereUniqueInput[] | undefined;
}
