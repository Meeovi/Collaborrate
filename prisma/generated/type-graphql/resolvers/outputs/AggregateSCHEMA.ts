import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SCHEMACountAggregate } from "../outputs/SCHEMACountAggregate";
import { SCHEMAMaxAggregate } from "../outputs/SCHEMAMaxAggregate";
import { SCHEMAMinAggregate } from "../outputs/SCHEMAMinAggregate";

@TypeGraphQL.ObjectType("AggregateSCHEMA", {
  isAbstract: true
})
export class AggregateSCHEMA {
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
