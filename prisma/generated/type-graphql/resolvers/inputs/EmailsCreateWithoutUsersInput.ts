import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateNestedOneWithoutEmailsInput } from "../inputs/CustomersCreateNestedOneWithoutEmailsInput";

@TypeGraphQL.InputType("EmailsCreateWithoutUsersInput", {
  isAbstract: true
})
export class EmailsCreateWithoutUsersInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subject?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bcc?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cc?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  from?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media?: string | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutEmailsInput, {
    nullable: true
  })
  customers?: CustomersCreateNestedOneWithoutEmailsInput | undefined;
}