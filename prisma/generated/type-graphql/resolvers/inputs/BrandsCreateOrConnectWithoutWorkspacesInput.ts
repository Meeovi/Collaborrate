import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsCreateWithoutWorkspacesInput } from "../inputs/BrandsCreateWithoutWorkspacesInput";
import { BrandsWhereUniqueInput } from "../inputs/BrandsWhereUniqueInput";

@TypeGraphQL.InputType("BrandsCreateOrConnectWithoutWorkspacesInput", {
  isAbstract: true
})
export class BrandsCreateOrConnectWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => BrandsWhereUniqueInput, {
    nullable: false
  })
  where!: BrandsWhereUniqueInput;

  @TypeGraphQL.Field(_type => BrandsCreateWithoutWorkspacesInput, {
    nullable: false
  })
  create!: BrandsCreateWithoutWorkspacesInput;
}
