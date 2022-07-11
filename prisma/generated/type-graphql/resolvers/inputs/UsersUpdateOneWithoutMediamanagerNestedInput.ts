import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutMediamanagerInput } from "../inputs/UsersCreateOrConnectWithoutMediamanagerInput";
import { UsersCreateWithoutMediamanagerInput } from "../inputs/UsersCreateWithoutMediamanagerInput";
import { UsersUpdateWithoutMediamanagerInput } from "../inputs/UsersUpdateWithoutMediamanagerInput";
import { UsersUpsertWithoutMediamanagerInput } from "../inputs/UsersUpsertWithoutMediamanagerInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersUpdateOneWithoutMediamanagerNestedInput", {
  isAbstract: true
})
export class UsersUpdateOneWithoutMediamanagerNestedInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutMediamanagerInput, {
    nullable: true
  })
  create?: UsersCreateWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutMediamanagerInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpsertWithoutMediamanagerInput, {
    nullable: true
  })
  upsert?: UsersUpsertWithoutMediamanagerInput | undefined;

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

  @TypeGraphQL.Field(_type => UsersUpdateWithoutMediamanagerInput, {
    nullable: true
  })
  update?: UsersUpdateWithoutMediamanagerInput | undefined;
}
