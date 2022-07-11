import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Join_users__Role", {
  isAbstract: true
})
export class Join_users__Role {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  relatedId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  owningId!: string;
}
