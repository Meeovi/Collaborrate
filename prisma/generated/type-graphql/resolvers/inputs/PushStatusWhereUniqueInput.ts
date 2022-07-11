import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("PushStatusWhereUniqueInput", {
  isAbstract: true
})
export class PushStatusWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  objectId?: string | undefined;
}
