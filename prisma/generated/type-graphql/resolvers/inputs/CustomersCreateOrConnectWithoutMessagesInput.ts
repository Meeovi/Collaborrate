import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateWithoutMessagesInput } from "../inputs/CustomersCreateWithoutMessagesInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateOrConnectWithoutMessagesInput", {
  isAbstract: true
})
export class CustomersCreateOrConnectWithoutMessagesInput {
  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: false
  })
  where!: CustomersWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomersCreateWithoutMessagesInput, {
    nullable: false
  })
  create!: CustomersCreateWithoutMessagesInput;
}
