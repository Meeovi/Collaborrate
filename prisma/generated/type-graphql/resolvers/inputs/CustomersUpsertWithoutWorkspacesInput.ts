import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutWorkspacesInput } from "../inputs/CustomersCreateWithoutWorkspacesInput";
import { CustomersUpdateWithoutWorkspacesInput } from "../inputs/CustomersUpdateWithoutWorkspacesInput";

@TypeGraphQL.InputType("CustomersUpsertWithoutWorkspacesInput", {
  isAbstract: true
})
export class CustomersUpsertWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => CustomersUpdateWithoutWorkspacesInput, {
    nullable: false
  })
  update!: CustomersUpdateWithoutWorkspacesInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutWorkspacesInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutWorkspacesInput;
}
