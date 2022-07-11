import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { JobStatusCountAggregate } from "../outputs/JobStatusCountAggregate";
import { JobStatusMaxAggregate } from "../outputs/JobStatusMaxAggregate";
import { JobStatusMinAggregate } from "../outputs/JobStatusMinAggregate";

@TypeGraphQL.ObjectType("AggregateJobStatus", {
  isAbstract: true
})
export class AggregateJobStatus {
  @TypeGraphQL.Field(_type => JobStatusCountAggregate, {
    nullable: true
  })
  _count!: JobStatusCountAggregate | null;

  @TypeGraphQL.Field(_type => JobStatusMinAggregate, {
    nullable: true
  })
  _min!: JobStatusMinAggregate | null;

  @TypeGraphQL.Field(_type => JobStatusMaxAggregate, {
    nullable: true
  })
  _max!: JobStatusMaxAggregate | null;
}
