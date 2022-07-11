import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { KnowledgebaseAvgAggregate } from "../outputs/KnowledgebaseAvgAggregate";
import { KnowledgebaseCountAggregate } from "../outputs/KnowledgebaseCountAggregate";
import { KnowledgebaseMaxAggregate } from "../outputs/KnowledgebaseMaxAggregate";
import { KnowledgebaseMinAggregate } from "../outputs/KnowledgebaseMinAggregate";
import { KnowledgebaseSumAggregate } from "../outputs/KnowledgebaseSumAggregate";

@TypeGraphQL.ObjectType("AggregateKnowledgebase", {
  isAbstract: true
})
export class AggregateKnowledgebase {
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
