import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutWorkspacesInput } from "../inputs/CustomersCreateOrConnectWithoutWorkspacesInput";
import { CustomersCreateWithoutWorkspacesInput } from "../inputs/CustomersCreateWithoutWorkspacesInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateNestedOneWithoutWorkspacesInput", {
  isAbstract: true
})
export class CustomersCreateNestedOneWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutWorkspacesInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutWorkspacesInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutWorkspacesInput | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomersWhereUniqueInput | undefined;
}
