import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReturnsCreateManyCustomersInputEnvelope } from "../inputs/ReturnsCreateManyCustomersInputEnvelope";
import { ReturnsCreateOrConnectWithoutCustomersInput } from "../inputs/ReturnsCreateOrConnectWithoutCustomersInput";
import { ReturnsCreateWithoutCustomersInput } from "../inputs/ReturnsCreateWithoutCustomersInput";
import { ReturnsScalarWhereInput } from "../inputs/ReturnsScalarWhereInput";
import { ReturnsUpdateManyWithWhereWithoutCustomersInput } from "../inputs/ReturnsUpdateManyWithWhereWithoutCustomersInput";
import { ReturnsUpdateWithWhereUniqueWithoutCustomersInput } from "../inputs/ReturnsUpdateWithWhereUniqueWithoutCustomersInput";
import { ReturnsUpsertWithWhereUniqueWithoutCustomersInput } from "../inputs/ReturnsUpsertWithWhereUniqueWithoutCustomersInput";
import { ReturnsWhereUniqueInput } from "../inputs/ReturnsWhereUniqueInput";

@TypeGraphQL.InputType("ReturnsUpdateManyWithoutCustomersInput", {
  isAbstract: true
})
export class ReturnsUpdateManyWithoutCustomersInput {
  @TypeGraphQL.Field(_type => [ReturnsCreateWithoutCustomersInput], {
    nullable: true
  })
  create?: ReturnsCreateWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReturnsCreateOrConnectWithoutCustomersInput], {
    nullable: true
  })
  connectOrCreate?: ReturnsCreateOrConnectWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReturnsUpsertWithWhereUniqueWithoutCustomersInput], {
    nullable: true
  })
  upsert?: ReturnsUpsertWithWhereUniqueWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => ReturnsCreateManyCustomersInputEnvelope, {
    nullable: true
  })
  createMany?: ReturnsCreateManyCustomersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReturnsWhereUniqueInput], {
    nullable: true
  })
  set?: ReturnsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReturnsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ReturnsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReturnsWhereUniqueInput], {
    nullable: true
  })
  delete?: ReturnsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReturnsWhereUniqueInput], {
    nullable: true
  })
  connect?: ReturnsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReturnsUpdateWithWhereUniqueWithoutCustomersInput], {
    nullable: true
  })
  update?: ReturnsUpdateWithWhereUniqueWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReturnsUpdateManyWithWhereWithoutCustomersInput], {
    nullable: true
  })
  updateMany?: ReturnsUpdateManyWithWhereWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReturnsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReturnsScalarWhereInput[] | undefined;
}
