import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IdempotencyCountAggregate } from "../outputs/IdempotencyCountAggregate";
import { IdempotencyMaxAggregate } from "../outputs/IdempotencyMaxAggregate";
import { IdempotencyMinAggregate } from "../outputs/IdempotencyMinAggregate";

@TypeGraphQL.ObjectType("AggregateIdempotency", {
  isAbstract: true
})
export class AggregateIdempotency {
  @TypeGraphQL.Field(_type => IdempotencyCountAggregate, {
    nullable: true
  })
  _count!: IdempotencyCountAggregate | null;

  @TypeGraphQL.Field(_type => IdempotencyMinAggregate, {
    nullable: true
  })
  _min!: IdempotencyMinAggregate | null;

  @TypeGraphQL.Field(_type => IdempotencyMaxAggregate, {
    nullable: true
  })
  _max!: IdempotencyMaxAggregate | null;
}
