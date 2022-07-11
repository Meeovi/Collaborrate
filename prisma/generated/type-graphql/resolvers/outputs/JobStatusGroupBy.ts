import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { JobStatusCountAggregate } from "../outputs/JobStatusCountAggregate";
import { JobStatusMaxAggregate } from "../outputs/JobStatusMaxAggregate";
import { JobStatusMinAggregate } from "../outputs/JobStatusMinAggregate";

@TypeGraphQL.ObjectType("JobStatusGroupBy", {
  isAbstract: true
})
export class JobStatusGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  objectId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  jobName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  source!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  params!: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  finishedAt!: Date | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  rperm!: string[] | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  wperm!: string[] | null;

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
