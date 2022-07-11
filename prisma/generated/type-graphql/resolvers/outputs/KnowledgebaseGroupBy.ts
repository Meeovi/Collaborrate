import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { KnowledgebaseAvgAggregate } from "../outputs/KnowledgebaseAvgAggregate";
import { KnowledgebaseCountAggregate } from "../outputs/KnowledgebaseCountAggregate";
import { KnowledgebaseMaxAggregate } from "../outputs/KnowledgebaseMaxAggregate";
import { KnowledgebaseMinAggregate } from "../outputs/KnowledgebaseMinAggregate";
import { KnowledgebaseSumAggregate } from "../outputs/KnowledgebaseSumAggregate";

@TypeGraphQL.ObjectType("KnowledgebaseGroupBy", {
  isAbstract: true
})
export class KnowledgebaseGroupBy {
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
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  revision!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resolution!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  author!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  approver!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date_modified!: Date | null;

  @TypeGraphQL.Field(_type => KnowledgebaseCountAggregate, {
    nullable: true
  })
  _count!: KnowledgebaseCountAggregate | null;

  @TypeGraphQL.Field(_type => KnowledgebaseAvgAggregate, {
    nullable: true
  })
  _avg!: KnowledgebaseAvgAggregate | null;

  @TypeGraphQL.Field(_type => KnowledgebaseSumAggregate, {
    nullable: true
  })
  _sum!: KnowledgebaseSumAggregate | null;

  @TypeGraphQL.Field(_type => KnowledgebaseMinAggregate, {
    nullable: true
  })
  _min!: KnowledgebaseMinAggregate | null;

  @TypeGraphQL.Field(_type => KnowledgebaseMaxAggregate, {
    nullable: true
  })
  _max!: KnowledgebaseMaxAggregate | null;
}
