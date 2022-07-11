import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsCreateOrConnectWithoutWorkspacesInput } from "../inputs/BrandsCreateOrConnectWithoutWorkspacesInput";
import { BrandsCreateWithoutWorkspacesInput } from "../inputs/BrandsCreateWithoutWorkspacesInput";
import { BrandsUpdateWithoutWorkspacesInput } from "../inputs/BrandsUpdateWithoutWorkspacesInput";
import { BrandsUpsertWithoutWorkspacesInput } from "../inputs/BrandsUpsertWithoutWorkspacesInput";
import { BrandsWhereUniqueInput } from "../inputs/BrandsWhereUniqueInput";

@TypeGraphQL.InputType("BrandsUpdateOneWithoutWorkspacesNestedInput", {
  isAbstract: true
})
export class BrandsUpdateOneWithoutWorkspacesNestedInput {
  @TypeGraphQL.Field(_type => BrandsCreateWithoutWorkspacesInput, {
    nullable: true
  })
  create?: BrandsCreateWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => BrandsCreateOrConnectWithoutWorkspacesInput, {
    nullable: true
  })
  connectOrCreate?: BrandsCreateOrConnectWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => BrandsUpsertWithoutWorkspacesInput, {
    nullable: true
  })
  upsert?: BrandsUpsertWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => BrandsWhereUniqueInput, {
    nullable: true
  })
  connect?: BrandsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BrandsUpdateWithoutWorkspacesInput, {
    nullable: true
  })
  update?: BrandsUpdateWithoutWorkspacesInput | undefined;
}
