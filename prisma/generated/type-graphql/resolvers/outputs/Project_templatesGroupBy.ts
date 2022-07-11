import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Project_templatesAvgAggregate } from "../outputs/Project_templatesAvgAggregate";
import { Project_templatesCountAggregate } from "../outputs/Project_templatesCountAggregate";
import { Project_templatesMaxAggregate } from "../outputs/Project_templatesMaxAggregate";
import { Project_templatesMinAggregate } from "../outputs/Project_templatesMinAggregate";
import { Project_templatesSumAggregate } from "../outputs/Project_templatesSumAggregate";

@TypeGraphQL.ObjectType("Project_templatesGroupBy", {
  isAbstract: true
})
export class Project_templatesGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  consider_working_days!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priority!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  project_manager!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resource!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => Project_templatesCountAggregate, {
    nullable: true
  })
  _count!: Project_templatesCountAggregate | null;

  @TypeGraphQL.Field(_type => Project_templatesAvgAggregate, {
    nullable: true
  })
  _avg!: Project_templatesAvgAggregate | null;

  @TypeGraphQL.Field(_type => Project_templatesSumAggregate, {
    nullable: true
  })
  _sum!: Project_templatesSumAggregate | null;

  @TypeGraphQL.Field(_type => Project_templatesMinAggregate, {
    nullable: true
  })
  _min!: Project_templatesMinAggregate | null;

  @TypeGraphQL.Field(_type => Project_templatesMaxAggregate, {
    nullable: true
  })
  _max!: Project_templatesMaxAggregate | null;
}
