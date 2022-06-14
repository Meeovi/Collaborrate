import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessagesCreateManyUsersInput } from "../inputs/MessagesCreateManyUsersInput";

@TypeGraphQL.InputType("MessagesCreateManyUsersInputEnvelope", {
  isAbstract: true
})
export class MessagesCreateManyUsersInputEnvelope {
  @TypeGraphQL.Field(_type => [MessagesCreateManyUsersInput], {
    nullable: false
  })
  data!: MessagesCreateManyUsersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
