import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("GraphQLConfigMinAggregate", {
  isAbstract: true
})
export class GraphQLConfigMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  objectId!: string | null;
}
