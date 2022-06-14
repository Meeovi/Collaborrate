import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesCreateOrConnectWithoutWorkspacesInput } from "../inputs/CategoriesCreateOrConnectWithoutWorkspacesInput";
import { CategoriesCreateWithoutWorkspacesInput } from "../inputs/CategoriesCreateWithoutWorkspacesInput";
import { CategoriesUpdateWithoutWorkspacesInput } from "../inputs/CategoriesUpdateWithoutWorkspacesInput";
import { CategoriesUpsertWithoutWorkspacesInput } from "../inputs/CategoriesUpsertWithoutWorkspacesInput";
import { CategoriesWhereUniqueInput } from "../inputs/CategoriesWhereUniqueInput";

@TypeGraphQL.InputType("CategoriesUpdateOneWithoutWorkspacesInput", {
  isAbstract: true
})
export class CategoriesUpdateOneWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => CategoriesCreateWithoutWorkspacesInput, {
    nullable: true
  })
  create?: CategoriesCreateWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesCreateOrConnectWithoutWorkspacesInput, {
    nullable: true
  })
  connectOrCreate?: CategoriesCreateOrConnectWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesUpsertWithoutWorkspacesInput, {
    nullable: true
  })
  upsert?: CategoriesUpsertWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CategoriesWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoriesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesUpdateWithoutWorkspacesInput, {
    nullable: true
  })
  update?: CategoriesUpdateWithoutWorkspacesInput | undefined;
}
