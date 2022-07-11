import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessagesCreateManyCustomersInput } from "../inputs/MessagesCreateManyCustomersInput";

@TypeGraphQL.InputType("MessagesCreateManyCustomersInputEnvelope", {
  isAbstract: true
})
export class MessagesCreateManyCustomersInputEnvelope {
  @TypeGraphQL.Field(_type => [MessagesCreateManyCustomersInput], {
    nullable: false
  })
  data!: MessagesCreateManyCustomersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
