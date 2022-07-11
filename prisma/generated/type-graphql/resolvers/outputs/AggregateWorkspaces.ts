import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesAvgAggregate } from "../outputs/WorkspacesAvgAggregate";
import { WorkspacesCountAggregate } from "../outputs/WorkspacesCountAggregate";
import { WorkspacesMaxAggregate } from "../outputs/WorkspacesMaxAggregate";
import { WorkspacesMinAggregate } from "../outputs/WorkspacesMinAggregate";
import { WorkspacesSumAggregate } from "../outputs/WorkspacesSumAggregate";

@TypeGraphQL.ObjectType("AggregateWorkspaces", {
  isAbstract: true
})
export class AggregateWorkspaces {
  @TypeGraphQL.Field(_type => WorkspacesCountAggregate, {
    nullable: true
  })
  _count!: WorkspacesCountAggregate | null;

  @TypeGraphQL.Field(_type => WorkspacesAvgAggregate, {
    nullable: true
  })
  _avg!: WorkspacesAvgAggregate | null;

  @TypeGraphQL.Field(_type => WorkspacesSumAggregate, {
    nullable: true
  })
  _sum!: WorkspacesSumAggregate | null;

  @TypeGraphQL.Field(_type => WorkspacesMinAggregate, {
    nullable: true
  })
  _min!: WorkspacesMinAggregate | null;

  @TypeGraphQL.Field(_type => WorkspacesMaxAggregate, {
    nullable: true
  })
  _max!: WorkspacesMaxAggregate | null;
}
