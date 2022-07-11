import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OotoAvgAggregate } from "../outputs/OotoAvgAggregate";
import { OotoCountAggregate } from "../outputs/OotoCountAggregate";
import { OotoMaxAggregate } from "../outputs/OotoMaxAggregate";
import { OotoMinAggregate } from "../outputs/OotoMinAggregate";
import { OotoSumAggregate } from "../outputs/OotoSumAggregate";

@TypeGraphQL.ObjectType("AggregateOoto", {
  isAbstract: true
})
export class AggregateOoto {
  @TypeGraphQL.Field(_type => OotoCountAggregate, {
    nullable: true
  })
  _count!: OotoCountAggregate | null;

  @TypeGraphQL.Field(_type => OotoAvgAggregate, {
    nullable: true
  })
  _avg!: OotoAvgAggregate | null;

  @TypeGraphQL.Field(_type => OotoSumAggregate, {
    nullable: true
  })
  _sum!: OotoSumAggregate | null;

  @TypeGraphQL.Field(_type => OotoMinAggregate, {
    nullable: true
  })
  _min!: OotoMinAggregate | null;

  @TypeGraphQL.Field(_type => OotoMaxAggregate, {
    nullable: true
  })
  _max!: OotoMaxAggregate | null;
}
