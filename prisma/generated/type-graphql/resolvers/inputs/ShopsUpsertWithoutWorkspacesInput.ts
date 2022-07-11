import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShopsCreateWithoutWorkspacesInput } from "../inputs/ShopsCreateWithoutWorkspacesInput";
import { ShopsUpdateWithoutWorkspacesInput } from "../inputs/ShopsUpdateWithoutWorkspacesInput";

@TypeGraphQL.InputType("ShopsUpsertWithoutWorkspacesInput", {
  isAbstract: true
})
export class ShopsUpsertWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => ShopsUpdateWithoutWorkspacesInput, {
    nullable: false
  })
  update!: ShopsUpdateWithoutWorkspacesInput;

  @TypeGraphQL.Field(_type => ShopsCreateWithoutWorkspacesInput, {
    nullable: false
  })
  create!: ShopsCreateWithoutWorkspacesInput;
}
