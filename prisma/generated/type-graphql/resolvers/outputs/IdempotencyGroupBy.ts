import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IdempotencyCountAggregate } from "../outputs/IdempotencyCountAggregate";
import { IdempotencyMaxAggregate } from "../outputs/IdempotencyMaxAggregate";
import { IdempotencyMinAggregate } from "../outputs/IdempotencyMinAggregate";

@TypeGraphQL.ObjectType("IdempotencyGroupBy", {
  isAbstract: true
})
export class IdempotencyGroupBy {
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
  reqId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  expire!: Date | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  rperm!: string[] | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  wperm!: string[] | null;

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
