import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutMessagesInput } from "../inputs/CustomersCreateWithoutMessagesInput";
import { CustomersUpdateWithoutMessagesInput } from "../inputs/CustomersUpdateWithoutMessagesInput";

@TypeGraphQL.InputType("CustomersUpsertWithoutMessagesInput", {
  isAbstract: true
})
export class CustomersUpsertWithoutMessagesInput {
  @TypeGraphQL.Field(_type => CustomersUpdateWithoutMessagesInput, {
    nullable: false
  })
  update!: CustomersUpdateWithoutMessagesInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutMessagesInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutMessagesInput;
}
