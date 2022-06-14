import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutWorkspacesInput } from "../inputs/CustomersCreateWithoutWorkspacesInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateOrConnectWithoutWorkspacesInput", {
  isAbstract: true
})
export class CustomersCreateOrConnectWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: false
  })
  where!: CustomersWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutWorkspacesInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutWorkspacesInput;
}
