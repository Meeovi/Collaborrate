import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutEmailsInput } from "../inputs/CustomersCreateWithoutEmailsInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateOrConnectWithoutEmailsInput", {
  isAbstract: true
})
export class CustomersCreateOrConnectWithoutEmailsInput {
  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: false
  })
  where!: CustomersWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutEmailsInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutEmailsInput;
}
