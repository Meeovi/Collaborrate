import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_subscribersCreateManyCustomersInputEnvelope } from "../inputs/Newsletter_subscribersCreateManyCustomersInputEnvelope";
import { Newsletter_subscribersCreateOrConnectWithoutCustomersInput } from "../inputs/Newsletter_subscribersCreateOrConnectWithoutCustomersInput";
import { Newsletter_subscribersCreateWithoutCustomersInput } from "../inputs/Newsletter_subscribersCreateWithoutCustomersInput";
import { Newsletter_subscribersScalarWhereInput } from "../inputs/Newsletter_subscribersScalarWhereInput";
import { Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput } from "../inputs/Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput";
import { Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput } from "../inputs/Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput";
import { Newsletter_subscribersUpsertWithWhereUniqueWithoutCustomersInput } from "../inputs/Newsletter_subscribersUpsertWithWhereUniqueWithoutCustomersInput";
import { Newsletter_subscribersWhereUniqueInput } from "../inputs/Newsletter_subscribersWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_subscribersUpdateManyWithoutCustomersNestedInput", {
  isAbstract: true
})
export class Newsletter_subscribersUpdateManyWithoutCustomersNestedInput {
  @TypeGraphQL.Field(_type => [Newsletter_subscribersCreateWithoutCustomersInput], {
    nullable: true
  })
  create?: Newsletter_subscribersCreateWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_subscribersCreateOrConnectWithoutCustomersInput], {
    nullable: true
  })
  connectOrCreate?: Newsletter_subscribersCreateOrConnectWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_subscribersUpsertWithWhereUniqueWithoutCustomersInput], {
    nullable: true
  })
  upsert?: Newsletter_subscribersUpsertWithWhereUniqueWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => Newsletter_subscribersCreateManyCustomersInputEnvelope, {
    nullable: true
  })
  createMany?: Newsletter_subscribersCreateManyCustomersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_subscribersWhereUniqueInput], {
    nullable: true
  })
  set?: Newsletter_subscribersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_subscribersWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Newsletter_subscribersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_subscribersWhereUniqueInput], {
    nullable: true
  })
  delete?: Newsletter_subscribersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_subscribersWhereUniqueInput], {
    nullable: true
  })
  connect?: Newsletter_subscribersWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput], {
    nullable: true
  })
  update?: Newsletter_subscribersUpdateWithWhereUniqueWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput], {
    nullable: true
  })
  updateMany?: Newsletter_subscribersUpdateManyWithWhereWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_subscribersScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Newsletter_subscribersScalarWhereInput[] | undefined;
}
