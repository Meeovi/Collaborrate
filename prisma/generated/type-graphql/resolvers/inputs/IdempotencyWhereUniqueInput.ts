import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("IdempotencyWhereUniqueInput", {
  isAbstract: true
})
export class IdempotencyWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  objectId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reqId?: string | undefined;
}
