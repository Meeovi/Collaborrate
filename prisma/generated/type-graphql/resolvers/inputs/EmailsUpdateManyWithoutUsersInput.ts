import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailsCreateManyUsersInputEnvelope } from "../inputs/EmailsCreateManyUsersInputEnvelope";
import { EmailsCreateOrConnectWithoutUsersInput } from "../inputs/EmailsCreateOrConnectWithoutUsersInput";
import { EmailsCreateWithoutUsersInput } from "../inputs/EmailsCreateWithoutUsersInput";
import { EmailsScalarWhereInput } from "../inputs/EmailsScalarWhereInput";
import { EmailsUpdateManyWithWhereWithoutUsersInput } from "../inputs/EmailsUpdateManyWithWhereWithoutUsersInput";
import { EmailsUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/EmailsUpdateWithWhereUniqueWithoutUsersInput";
import { EmailsUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/EmailsUpsertWithWhereUniqueWithoutUsersInput";
import { EmailsWhereUniqueInput } from "../inputs/EmailsWhereUniqueInput";

@TypeGraphQL.InputType("EmailsUpdateManyWithoutUsersInput", {
  isAbstract: true
})
export class EmailsUpdateManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [EmailsCreateWithoutUsersInput], {
    nullable: true
  })
  create?: EmailsCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailsCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: EmailsCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailsUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  upsert?: EmailsUpsertWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => EmailsCreateManyUsersInputEnvelope, {
    nullable: true
  })
  createMany?: EmailsCreateManyUsersInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [EmailsUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  update?: EmailsUpdateWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailsUpdateManyWithWhereWithoutUsersInput], {
    nullable: true
  })
  updateMany?: EmailsUpdateManyWithWhereWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmailsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EmailsScalarWhereInput[] | undefined;
}
