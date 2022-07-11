import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Tax_ruleCreateManyProductsInputEnvelope } from "../inputs/Tax_ruleCreateManyProductsInputEnvelope";
import { Tax_ruleCreateOrConnectWithoutProductsInput } from "../inputs/Tax_ruleCreateOrConnectWithoutProductsInput";
import { Tax_ruleCreateWithoutProductsInput } from "../inputs/Tax_ruleCreateWithoutProductsInput";
import { Tax_ruleScalarWhereInput } from "../inputs/Tax_ruleScalarWhereInput";
import { Tax_ruleUpdateManyWithWhereWithoutProductsInput } from "../inputs/Tax_ruleUpdateManyWithWhereWithoutProductsInput";
import { Tax_ruleUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/Tax_ruleUpdateWithWhereUniqueWithoutProductsInput";
import { Tax_ruleUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/Tax_ruleUpsertWithWhereUniqueWithoutProductsInput";
import { Tax_ruleWhereUniqueInput } from "../inputs/Tax_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Tax_ruleUpdateManyWithoutProductsNestedInput", {
  isAbstract: true
})
export class Tax_ruleUpdateManyWithoutProductsNestedInput {
  @TypeGraphQL.Field(_type => [Tax_ruleCreateWithoutProductsInput], {
    nullable: true
  })
  create?: Tax_ruleCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_ruleCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: Tax_ruleCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_ruleUpsertWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  upsert?: Tax_ruleUpsertWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => Tax_ruleCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: Tax_ruleCreateManyProductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Tax_ruleWhereUniqueInput], {
    nullable: true
  })
  set?: Tax_ruleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_ruleWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Tax_ruleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_ruleWhereUniqueInput], {
    nullable: true
  })
  delete?: Tax_ruleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_ruleWhereUniqueInput], {
    nullable: true
  })
  connect?: Tax_ruleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_ruleUpdateWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  update?: Tax_ruleUpdateWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_ruleUpdateManyWithWhereWithoutProductsInput], {
    nullable: true
  })
  updateMany?: Tax_ruleUpdateManyWithWhereWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_ruleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Tax_ruleScalarWhereInput[] | undefined;
}
