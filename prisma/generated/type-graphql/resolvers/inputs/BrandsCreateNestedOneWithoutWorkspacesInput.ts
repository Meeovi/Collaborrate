import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsCreateOrConnectWithoutWorkspacesInput } from "../inputs/BrandsCreateOrConnectWithoutWorkspacesInput";
import { BrandsCreateWithoutWorkspacesInput } from "../inputs/BrandsCreateWithoutWorkspacesInput";
import { BrandsWhereUniqueInput } from "../inputs/BrandsWhereUniqueInput";

@TypeGraphQL.InputType("BrandsCreateNestedOneWithoutWorkspacesInput", {
  isAbstract: true
})
export class BrandsCreateNestedOneWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => BrandsCreateWithoutWorkspacesInput, {
    nullable: true
  })
  create?: BrandsCreateWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => BrandsCreateOrConnectWithoutWorkspacesInput, {
    nullable: true
  })
  connectOrCreate?: BrandsCreateOrConnectWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => BrandsWhereUniqueInput, {
    nullable: true
  })
  connect?: BrandsWhereUniqueInput | undefined;
}
