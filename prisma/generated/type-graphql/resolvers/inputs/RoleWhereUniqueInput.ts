import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("RoleWhereUniqueInput", {
  isAbstract: true
})
export class RoleWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  objectId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;
}
