import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateNestedOneWithoutMessagesInput } from "../inputs/CustomersCreateNestedOneWithoutMessagesInput";
import { UsersCreateNestedOneWithoutMessagesInput } from "../inputs/UsersCreateNestedOneWithoutMessagesInput";

@TypeGraphQL.InputType("MessagesCreateInput", {
  isAbstract: true
})
export class MessagesCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  from?: string | undefined;

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
  sender?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media?: string | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutMessagesInput, {
    nullable: true
  })
  customers?: CustomersCreateNestedOneWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateNestedOneWithoutMessagesInput, {
    nullable: true
  })
  users?: UsersCreateNestedOneWithoutMessagesInput | undefined;
}
