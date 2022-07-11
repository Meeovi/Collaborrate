import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShopsCreateOrConnectWithoutWorkspacesInput } from "../inputs/ShopsCreateOrConnectWithoutWorkspacesInput";
import { ShopsCreateWithoutWorkspacesInput } from "../inputs/ShopsCreateWithoutWorkspacesInput";
import { ShopsUpdateWithoutWorkspacesInput } from "../inputs/ShopsUpdateWithoutWorkspacesInput";
import { ShopsUpsertWithoutWorkspacesInput } from "../inputs/ShopsUpsertWithoutWorkspacesInput";
import { ShopsWhereUniqueInput } from "../inputs/ShopsWhereUniqueInput";

@TypeGraphQL.InputType("ShopsUpdateOneWithoutWorkspacesNestedInput", {
  isAbstract: true
})
export class ShopsUpdateOneWithoutWorkspacesNestedInput {
  @TypeGraphQL.Field(_type => ShopsCreateWithoutWorkspacesInput, {
    nullable: true
  })
  create?: ShopsCreateWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => ShopsCreateOrConnectWithoutWorkspacesInput, {
    nullable: true
  })
  connectOrCreate?: ShopsCreateOrConnectWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => ShopsUpsertWithoutWorkspacesInput, {
    nullable: true
  })
  upsert?: ShopsUpsertWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ShopsWhereUniqueInput, {
    nullable: true
  })
  connect?: ShopsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ShopsUpdateWithoutWorkspacesInput, {
    nullable: true
  })
  update?: ShopsUpdateWithoutWorkspacesInput | undefined;
}
