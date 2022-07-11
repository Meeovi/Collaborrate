import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShopsCreateOrConnectWithoutWorkspacesInput } from "../inputs/ShopsCreateOrConnectWithoutWorkspacesInput";
import { ShopsCreateWithoutWorkspacesInput } from "../inputs/ShopsCreateWithoutWorkspacesInput";
import { ShopsWhereUniqueInput } from "../inputs/ShopsWhereUniqueInput";

@TypeGraphQL.InputType("ShopsCreateNestedOneWithoutWorkspacesInput", {
  isAbstract: true
})
export class ShopsCreateNestedOneWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => ShopsCreateWithoutWorkspacesInput, {
    nullable: true
  })
  create?: ShopsCreateWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => ShopsCreateOrConnectWithoutWorkspacesInput, {
    nullable: true
  })
  connectOrCreate?: ShopsCreateOrConnectWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => ShopsWhereUniqueInput, {
    nullable: true
  })
  connect?: ShopsWhereUniqueInput | undefined;
}
