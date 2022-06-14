import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutEmailsInput } from "../inputs/CustomersCreateOrConnectWithoutEmailsInput";
import { CustomersCreateWithoutEmailsInput } from "../inputs/CustomersCreateWithoutEmailsInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateNestedOneWithoutEmailsInput", {
  isAbstract: true
})
export class CustomersCreateNestedOneWithoutEmailsInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutEmailsInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutEmailsInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutEmailsInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutEmailsInput | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomersWhereUniqueInput | undefined;
}
