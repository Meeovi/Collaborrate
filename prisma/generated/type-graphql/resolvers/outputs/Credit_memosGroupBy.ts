import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Credit_memosAvgAggregate } from "../outputs/Credit_memosAvgAggregate";
import { Credit_memosCountAggregate } from "../outputs/Credit_memosCountAggregate";
import { Credit_memosMaxAggregate } from "../outputs/Credit_memosMaxAggregate";
import { Credit_memosMinAggregate } from "../outputs/Credit_memosMinAggregate";
import { Credit_memosSumAggregate } from "../outputs/Credit_memosSumAggregate";

@TypeGraphQL.ObjectType("Credit_memosGroupBy", {
  isAbstract: true
})
export class Credit_memosGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  credit_memo!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  order_number!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bill_to_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  refunded!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  action!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cust_id!: number;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  prod_id!: bigint;

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
