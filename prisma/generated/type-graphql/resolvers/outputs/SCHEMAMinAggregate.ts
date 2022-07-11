import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SCHEMAMinAggregate", {
  isAbstract: true
})
export class SCHEMAMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  className!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isParseClass!: boolean | null;
}
