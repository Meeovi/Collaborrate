import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutProjectsInput } from "../inputs/UsersCreateOrConnectWithoutProjectsInput";
import { UsersCreateWithoutProjectsInput } from "../inputs/UsersCreateWithoutProjectsInput";
import { UsersUpdateWithoutProjectsInput } from "../inputs/UsersUpdateWithoutProjectsInput";
import { UsersUpsertWithoutProjectsInput } from "../inputs/UsersUpsertWithoutProjectsInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersUpdateOneWithoutProjectsNestedInput", {
  isAbstract: true
})
export class UsersUpdateOneWithoutProjectsNestedInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutProjectsInput, {
    nullable: true
  })
  create?: UsersCreateWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutProjectsInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpsertWithoutProjectsInput, {
    nullable: true
  })
  upsert?: UsersUpsertWithoutProjectsInput | undefined;

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

  @TypeGraphQL.Field(_type => UsersUpdateWithoutProjectsInput, {
    nullable: true
  })
  update?: UsersUpdateWithoutProjectsInput | undefined;
}
