import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeepdiveAvgAggregate } from "../outputs/DeepdiveAvgAggregate";
import { DeepdiveCountAggregate } from "../outputs/DeepdiveCountAggregate";
import { DeepdiveMaxAggregate } from "../outputs/DeepdiveMaxAggregate";
import { DeepdiveMinAggregate } from "../outputs/DeepdiveMinAggregate";
import { DeepdiveSumAggregate } from "../outputs/DeepdiveSumAggregate";

@TypeGraphQL.ObjectType("AggregateDeepdive", {
  isAbstract: true
})
export class AggregateDeepdive {
  @TypeGraphQL.Field(_type => DeepdiveCountAggregate, {
    nullable: true
  })
  _count!: DeepdiveCountAggregate | null;

  @TypeGraphQL.Field(_type => DeepdiveAvgAggregate, {
    nullable: true
  })
  _avg!: DeepdiveAvgAggregate | null;

  @TypeGraphQL.Field(_type => DeepdiveSumAggregate, {
    nullable: true
  })
  _sum!: DeepdiveSumAggregate | null;

  @TypeGraphQL.Field(_type => DeepdiveMinAggregate, {
    nullable: true
  })
  _min!: DeepdiveMinAggregate | null;

  @TypeGraphQL.Field(_type => DeepdiveMaxAggregate, {
    nullable: true
  })
  _max!: DeepdiveMaxAggregate | null;
}
