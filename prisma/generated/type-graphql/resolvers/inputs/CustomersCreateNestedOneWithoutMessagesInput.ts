import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateOrConnectWithoutMessagesInput } from "../inputs/CustomersCreateOrConnectWithoutMessagesInput";
import { CustomersCreateWithoutMessagesInput } from "../inputs/CustomersCreateWithoutMessagesInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.InputType("CustomersCreateNestedOneWithoutMessagesInput", {
  isAbstract: true
})
export class CustomersCreateNestedOneWithoutMessagesInput {
  @TypeGraphQL.Field(_type => CustomersCreateWithoutMessagesInput, {
    nullable: true
  })
  create?: CustomersCreateWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutMessagesInput, {
    nullable: true
  })
  connectOrCreate?: CustomersCreateOrConnectWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomersWhereUniqueInput | undefined;
}
