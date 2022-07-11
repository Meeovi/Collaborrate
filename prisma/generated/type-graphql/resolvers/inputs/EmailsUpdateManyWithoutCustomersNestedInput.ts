import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailsCreateManyCustomersInputEnvelope } from "../inputs/EmailsCreateManyCustomersInputEnvelope";
import { EmailsCreateOrConnectWithoutCustomersInput } from "../inputs/EmailsCreateOrConnectWithoutCustomersInput";
import { EmailsCreateWithoutCustomersInput } from "../inputs/EmailsCreateWithoutCustomersInput";
import { EmailsScalarWhereInput } from "../inputs/EmailsScalarWhereInput";
import { EmailsUpdateManyWithWhereWithoutCustomersInput } from "../inputs/EmailsUpdateManyWithWhereWithoutCustomersInput";
import { EmailsUpdateWithWhereUniqueWithoutCustomersInput } from "../inputs/EmailsUpdateWithWhereUniqueWithoutCustomersInput";
import { EmailsUpsertWithWhereUniqueWithoutCustomersInput } from "../inputs/EmailsUpsertWithWhereUniqueWithoutCustomersInput";
import { EmailsWhereUniqueInput } from "../inputs/EmailsWhereUniqueInput";

@TypeGraphQL.InputType("EmailsUpdateManyWithoutCustomersNestedInput", {
  isAbstract: true
})
export class EmailsUpdateManyWithoutCustomersNestedInput {
  @TypeGraphQL.Field(_type => [EmailsCreateWithoutCustomersInput], {
    nullable: true
  })
  create?: EmailsCreateWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailsCreateOrConnectWithoutCustomersInput], {
    nullable: true
  })
  connectOrCreate?: EmailsCreateOrConnectWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailsUpsertWithWhereUniqueWithoutCustomersInput], {
    nullable: true
  })
  upsert?: EmailsUpsertWithWhereUniqueWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => EmailsCreateManyCustomersInputEnvelope, {
    nullable: true
  })
  createMany?: EmailsCreateManyCustomersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EmailsWhereUniqueInput], {
    nullable: true
  })
  set?: EmailsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EmailsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailsWhereUniqueInput], {
    nullable: true
  })
  delete?: EmailsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailsWhereUniqueInput], {
    nullable: true
  })
  connect?: EmailsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailsUpdateWithWhereUniqueWithoutCustomersInput], {
    nullable: true
  })
  update?: EmailsUpdateWithWhereUniqueWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailsUpdateManyWithWhereWithoutCustomersInput], {
    nullable: true
  })
  updateMany?: EmailsUpdateManyWithWhereWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EmailsScalarWhereInput[] | undefined;
}
