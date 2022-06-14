import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutWorkspacesInput } from "../inputs/UsersCreateOrConnectWithoutWorkspacesInput";
import { UsersCreateWithoutWorkspacesInput } from "../inputs/UsersCreateWithoutWorkspacesInput";
import { UsersUpdateWithoutWorkspacesInput } from "../inputs/UsersUpdateWithoutWorkspacesInput";
import { UsersUpsertWithoutWorkspacesInput } from "../inputs/UsersUpsertWithoutWorkspacesInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersUpdateOneWithoutWorkspacesInput", {
  isAbstract: true
})
export class UsersUpdateOneWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutWorkspacesInput, {
    nullable: true
  })
  create?: UsersCreateWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutWorkspacesInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpsertWithoutWorkspacesInput, {
    nullable: true
  })
  upsert?: UsersUpsertWithoutWorkspacesInput | undefined;

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

  @TypeGraphQL.Field(_type => UsersUpdateWithoutWorkspacesInput, {
    nullable: true
  })
  update?: UsersUpdateWithoutWorkspacesInput | undefined;
}
