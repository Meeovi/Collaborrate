import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SCHEMACountAggregate } from "../outputs/SCHEMACountAggregate";
import { SCHEMAMaxAggregate } from "../outputs/SCHEMAMaxAggregate";
import { SCHEMAMinAggregate } from "../outputs/SCHEMAMinAggregate";

@TypeGraphQL.ObjectType("SCHEMAGroupBy", {
  isAbstract: true
})
export class SCHEMAGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  className!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  schema!: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isParseClass!: boolean | null;

  @TypeGraphQL.Field(_type => SCHEMACountAggregate, {
    nullable: true
  })
  _count!: SCHEMACountAggregate | null;

  @TypeGraphQL.Field(_type => SCHEMAMinAggregate, {
    nullable: true
  })
  _min!: SCHEMAMinAggregate | null;

  @TypeGraphQL.Field(_type => SCHEMAMaxAggregate, {
    nullable: true
  })
  _max!: SCHEMAMaxAggregate | null;
}
