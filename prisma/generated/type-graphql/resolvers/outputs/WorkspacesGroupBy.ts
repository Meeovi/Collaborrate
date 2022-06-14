import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesAvgAggregate } from "../outputs/WorkspacesAvgAggregate";
import { WorkspacesCountAggregate } from "../outputs/WorkspacesCountAggregate";
import { WorkspacesMaxAggregate } from "../outputs/WorkspacesMaxAggregate";
import { WorkspacesMinAggregate } from "../outputs/WorkspacesMinAggregate";
import { WorkspacesSumAggregate } from "../outputs/WorkspacesSumAggregate";

@TypeGraphQL.ObjectType("WorkspacesGroupBy", {
  isAbstract: true
})
export class WorkspacesGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  code!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  customers!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  users!: number | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  products!: bigint | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  tasks!: bigint | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  brands!: bigint | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  shops!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  category!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isPublic!: boolean | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  projects!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  author!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media!: string | null;

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
