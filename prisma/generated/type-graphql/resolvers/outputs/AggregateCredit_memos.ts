import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Credit_memosAvgAggregate } from "../outputs/Credit_memosAvgAggregate";
import { Credit_memosCountAggregate } from "../outputs/Credit_memosCountAggregate";
import { Credit_memosMaxAggregate } from "../outputs/Credit_memosMaxAggregate";
import { Credit_memosMinAggregate } from "../outputs/Credit_memosMinAggregate";
import { Credit_memosSumAggregate } from "../outputs/Credit_memosSumAggregate";

@TypeGraphQL.ObjectType("AggregateCredit_memos", {
  isAbstract: true
})
export class AggregateCredit_memos {
  @TypeGraphQL.Field(_type => Credit_memosCountAggregate, {
    nullable: true
  })
  _count!: Credit_memosCountAggregate | null;

  @TypeGraphQL.Field(_type => Credit_memosAvgAggregate, {
    nullable: true
  })
  _avg!: Credit_memosAvgAggregate | null;

  @TypeGraphQL.Field(_type => Credit_memosSumAggregate, {
    nullable: true
  })
  _sum!: Credit_memosSumAggregate | null;

  @TypeGraphQL.Field(_type => Credit_memosMinAggregate, {
    nullable: true
  })
  _min!: Credit_memosMinAggregate | null;

  @TypeGraphQL.Field(_type => Credit_memosMaxAggregate, {
    nullable: true
  })
  _max!: Credit_memosMaxAggregate | null;
}
