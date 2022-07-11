import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApitokenAvgAggregate } from "../outputs/ApitokenAvgAggregate";
import { ApitokenCountAggregate } from "../outputs/ApitokenCountAggregate";
import { ApitokenMaxAggregate } from "../outputs/ApitokenMaxAggregate";
import { ApitokenMinAggregate } from "../outputs/ApitokenMinAggregate";
import { ApitokenSumAggregate } from "../outputs/ApitokenSumAggregate";

@TypeGraphQL.ObjectType("AggregateApitoken", {
  isAbstract: true
})
export class AggregateApitoken {
  @TypeGraphQL.Field(_type => ApitokenCountAggregate, {
    nullable: true
  })
  _count!: ApitokenCountAggregate | null;

  @TypeGraphQL.Field(_type => ApitokenAvgAggregate, {
    nullable: true
  })
  _avg!: ApitokenAvgAggregate | null;

  @TypeGraphQL.Field(_type => ApitokenSumAggregate, {
    nullable: true
  })
  _sum!: ApitokenSumAggregate | null;

  @TypeGraphQL.Field(_type => ApitokenMinAggregate, {
    nullable: true
  })
  _min!: ApitokenMinAggregate | null;

  @TypeGraphQL.Field(_type => ApitokenMaxAggregate, {
    nullable: true
  })
  _max!: ApitokenMaxAggregate | null;
}
