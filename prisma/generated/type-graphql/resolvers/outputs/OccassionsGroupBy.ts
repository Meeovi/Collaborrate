import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccassionsAvgAggregate } from "../outputs/OccassionsAvgAggregate";
import { OccassionsCountAggregate } from "../outputs/OccassionsCountAggregate";
import { OccassionsMaxAggregate } from "../outputs/OccassionsMaxAggregate";
import { OccassionsMinAggregate } from "../outputs/OccassionsMinAggregate";
import { OccassionsSumAggregate } from "../outputs/OccassionsSumAggregate";

@TypeGraphQL.ObjectType("OccassionsGroupBy", {
  isAbstract: true
})
export class OccassionsGroupBy {
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
  category!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tags!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  products!: bigint | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  wishlists!: bigint | null;

  @TypeGraphQL.Field(_type => OccassionsCountAggregate, {
    nullable: true
  })
  _count!: OccassionsCountAggregate | null;

  @TypeGraphQL.Field(_type => OccassionsAvgAggregate, {
    nullable: true
  })
  _avg!: OccassionsAvgAggregate | null;

  @TypeGraphQL.Field(_type => OccassionsSumAggregate, {
    nullable: true
  })
  _sum!: OccassionsSumAggregate | null;

  @TypeGraphQL.Field(_type => OccassionsMinAggregate, {
    nullable: true
  })
  _min!: OccassionsMinAggregate | null;

  @TypeGraphQL.Field(_type => OccassionsMaxAggregate, {
    nullable: true
  })
  _max!: OccassionsMaxAggregate | null;
}
