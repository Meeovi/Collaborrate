import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessagesCreateManyCustomersInputEnvelope } from "../inputs/MessagesCreateManyCustomersInputEnvelope";
import { MessagesCreateOrConnectWithoutCustomersInput } from "../inputs/MessagesCreateOrConnectWithoutCustomersInput";
import { MessagesCreateWithoutCustomersInput } from "../inputs/MessagesCreateWithoutCustomersInput";
import { MessagesWhereUniqueInput } from "../inputs/MessagesWhereUniqueInput";

@TypeGraphQL.InputType("MessagesCreateNestedManyWithoutCustomersInput", {
  isAbstract: true
})
export class MessagesCreateNestedManyWithoutCustomersInput {
  @TypeGraphQL.Field(_type => [MessagesCreateWithoutCustomersInput], {
    nullable: true
  })
  create?: MessagesCreateWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessagesCreateOrConnectWithoutCustomersInput], {
    nullable: true
  })
  connectOrCreate?: MessagesCreateOrConnectWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => MessagesCreateManyCustomersInputEnvelope, {
    nullable: true
  })
  createMany?: MessagesCreateManyCustomersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MessagesWhereUniqueInput], {
    nullable: true
  })
  connect?: MessagesWhereUniqueInput[] | undefined;
}
