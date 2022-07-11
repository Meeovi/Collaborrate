import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BrandsCreateWithoutWorkspacesInput } from "../inputs/BrandsCreateWithoutWorkspacesInput";
import { BrandsUpdateWithoutWorkspacesInput } from "../inputs/BrandsUpdateWithoutWorkspacesInput";

@TypeGraphQL.InputType("BrandsUpsertWithoutWorkspacesInput", {
  isAbstract: true
})
export class BrandsUpsertWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => BrandsUpdateWithoutWorkspacesInput, {
    nullable: false
  })
  update!: BrandsUpdateWithoutWorkspacesInput;

  @TypeGraphQL.Field(_type => BrandsCreateWithoutWorkspacesInput, {
    nullable: false
  })
  create!: BrandsCreateWithoutWorkspacesInput;
}
