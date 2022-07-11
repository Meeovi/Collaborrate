import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EndofshiftAvgAggregate } from "../outputs/EndofshiftAvgAggregate";
import { EndofshiftCountAggregate } from "../outputs/EndofshiftCountAggregate";
import { EndofshiftMaxAggregate } from "../outputs/EndofshiftMaxAggregate";
import { EndofshiftMinAggregate } from "../outputs/EndofshiftMinAggregate";
import { EndofshiftSumAggregate } from "../outputs/EndofshiftSumAggregate";

@TypeGraphQL.ObjectType("EndofshiftGroupBy", {
  isAbstract: true
})
export class EndofshiftGroupBy {
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
  content!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  login!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mcms!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  next_shift!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  projects!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tickets!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  whid!: string | null;

  @TypeGraphQL.Field(_type => EndofshiftCountAggregate, {
    nullable: true
  })
  _count!: EndofshiftCountAggregate | null;

  @TypeGraphQL.Field(_type => EndofshiftAvgAggregate, {
    nullable: true
  })
  _avg!: EndofshiftAvgAggregate | null;

  @TypeGraphQL.Field(_type => EndofshiftSumAggregate, {
    nullable: true
  })
  _sum!: EndofshiftSumAggregate | null;

  @TypeGraphQL.Field(_type => EndofshiftMinAggregate, {
    nullable: true
  })
  _min!: EndofshiftMinAggregate | null;

  @TypeGraphQL.Field(_type => EndofshiftMaxAggregate, {
    nullable: true
  })
  _max!: EndofshiftMaxAggregate | null;
}
