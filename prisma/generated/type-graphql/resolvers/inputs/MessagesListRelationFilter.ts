import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessagesWhereInput } from "../inputs/MessagesWhereInput";

@TypeGraphQL.InputType("MessagesListRelationFilter", {
  isAbstract: true
})
export class MessagesListRelationFilter {
  @TypeGraphQL.Field(_type => MessagesWhereInput, {
    nullable: true
  })
  every?: MessagesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MessagesWhereInput, {
    nullable: true
  })
  some?: MessagesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MessagesWhereInput, {
    nullable: true
  })
  none?: MessagesWhereInput | undefined;
}
