import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("GlobalConfigMinAggregate", {
  isAbstract: true
})
export class GlobalConfigMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  objectId!: string | null;
}
