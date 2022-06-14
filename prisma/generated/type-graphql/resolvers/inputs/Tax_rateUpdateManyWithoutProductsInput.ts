import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Tax_rateCreateManyProductsInputEnvelope } from "../inputs/Tax_rateCreateManyProductsInputEnvelope";
import { Tax_rateCreateOrConnectWithoutProductsInput } from "../inputs/Tax_rateCreateOrConnectWithoutProductsInput";
import { Tax_rateCreateWithoutProductsInput } from "../inputs/Tax_rateCreateWithoutProductsInput";
import { Tax_rateScalarWhereInput } from "../inputs/Tax_rateScalarWhereInput";
import { Tax_rateUpdateManyWithWhereWithoutProductsInput } from "../inputs/Tax_rateUpdateManyWithWhereWithoutProductsInput";
import { Tax_rateUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/Tax_rateUpdateWithWhereUniqueWithoutProductsInput";
import { Tax_rateUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/Tax_rateUpsertWithWhereUniqueWithoutProductsInput";
import { Tax_rateWhereUniqueInput } from "../inputs/Tax_rateWhereUniqueInput";

@TypeGraphQL.InputType("Tax_rateUpdateManyWithoutProductsInput", {
  isAbstract: true
})
export class Tax_rateUpdateManyWithoutProductsInput {
  @TypeGraphQL.Field(_type => [Tax_rateCreateWithoutProductsInput], {
    nullable: true
  })
  create?: Tax_rateCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_rateCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: Tax_rateCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_rateUpsertWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  upsert?: Tax_rateUpsertWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => Tax_rateCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: Tax_rateCreateManyProductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Tax_rateWhereUniqueInput], {
    nullable: true
  })
  set?: Tax_rateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_rateWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Tax_rateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_rateWhereUniqueInput], {
    nullable: true
  })
  delete?: Tax_rateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_rateWhereUniqueInput], {
    nullable: true
  })
  connect?: Tax_rateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_rateUpdateWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  update?: Tax_rateUpdateWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_rateUpdateManyWithWhereWithoutProductsInput], {
    nullable: true
  })
  updateMany?: Tax_rateUpdateManyWithWhereWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_rateScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Tax_rateScalarWhereInput[] | undefined;
}
