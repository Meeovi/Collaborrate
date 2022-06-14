import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutMessagesInput } from "../inputs/UsersCreateOrConnectWithoutMessagesInput";
import { UsersCreateWithoutMessagesInput } from "../inputs/UsersCreateWithoutMessagesInput";
import { UsersUpdateWithoutMessagesInput } from "../inputs/UsersUpdateWithoutMessagesInput";
import { UsersUpsertWithoutMessagesInput } from "../inputs/UsersUpsertWithoutMessagesInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersUpdateOneWithoutMessagesInput", {
  isAbstract: true
})
export class UsersUpdateOneWithoutMessagesInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutMessagesInput, {
    nullable: true
  })
  create?: UsersCreateWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutMessagesInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpsertWithoutMessagesInput, {
    nullable: true
  })
  upsert?: UsersUpsertWithoutMessagesInput | undefined;

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

  @TypeGraphQL.Field(_type => UsersUpdateWithoutMessagesInput, {
    nullable: true
  })
  update?: UsersUpdateWithoutMessagesInput | undefined;
}
