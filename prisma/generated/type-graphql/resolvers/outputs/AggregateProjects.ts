import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsAvgAggregate } from "../outputs/ProjectsAvgAggregate";
import { ProjectsCountAggregate } from "../outputs/ProjectsCountAggregate";
import { ProjectsMaxAggregate } from "../outputs/ProjectsMaxAggregate";
import { ProjectsMinAggregate } from "../outputs/ProjectsMinAggregate";
import { ProjectsSumAggregate } from "../outputs/ProjectsSumAggregate";

@TypeGraphQL.ObjectType("AggregateProjects", {
  isAbstract: true
})
export class AggregateProjects {
  @TypeGraphQL.Field(_type => ProjectsCountAggregate, {
    nullable: true
  })
  _count!: ProjectsCountAggregate | null;

  @TypeGraphQL.Field(_type => ProjectsAvgAggregate, {
    nullable: true
  })
  _avg!: ProjectsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProjectsSumAggregate, {
    nullable: true
  })
  _sum!: ProjectsSumAggregate | null;

  @TypeGraphQL.Field(_type => ProjectsMinAggregate, {
    nullable: true
  })
  _min!: ProjectsMinAggregate | null;

  @TypeGraphQL.Field(_type => ProjectsMaxAggregate, {
    nullable: true
  })
  _max!: ProjectsMaxAggregate | null;
}
