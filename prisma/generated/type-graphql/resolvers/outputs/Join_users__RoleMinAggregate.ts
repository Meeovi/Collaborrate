import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("Join_users__RoleMinAggregate", {
  isAbstract: true
})
export class Join_users__RoleMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  relatedId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  owningId!: string | null;
}
