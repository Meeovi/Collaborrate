import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutEmailsInput } from "../inputs/UsersCreateOrConnectWithoutEmailsInput";
import { UsersCreateWithoutEmailsInput } from "../inputs/UsersCreateWithoutEmailsInput";
import { UsersUpdateWithoutEmailsInput } from "../inputs/UsersUpdateWithoutEmailsInput";
import { UsersUpsertWithoutEmailsInput } from "../inputs/UsersUpsertWithoutEmailsInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersUpdateOneWithoutEmailsInput", {
  isAbstract: true
})
export class UsersUpdateOneWithoutEmailsInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutEmailsInput, {
    nullable: true
  })
  create?: UsersCreateWithoutEmailsInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutEmailsInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutEmailsInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpsertWithoutEmailsInput, {
    nullable: true
  })
  upsert?: UsersUpsertWithoutEmailsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpdateWithoutEmailsInput, {
    nullable: true
  })
  update?: UsersUpdateWithoutEmailsInput | undefined;
}
