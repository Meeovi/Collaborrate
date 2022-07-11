import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CollectionsAvgAggregate } from "../outputs/CollectionsAvgAggregate";
import { CollectionsCountAggregate } from "../outputs/CollectionsCountAggregate";
import { CollectionsMaxAggregate } from "../outputs/CollectionsMaxAggregate";
import { CollectionsMinAggregate } from "../outputs/CollectionsMinAggregate";
import { CollectionsSumAggregate } from "../outputs/CollectionsSumAggregate";

@TypeGraphQL.ObjectType("CollectionsGroupBy", {
  isAbstract: true
})
export class CollectionsGroupBy {
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
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_keywords!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_description!: string | null;

  @TypeGraphQL.Field(_type => CollectionsCountAggregate, {
    nullable: true
  })
  _count!: CollectionsCountAggregate | null;

  @TypeGraphQL.Field(_type => CollectionsAvgAggregate, {
    nullable: true
  })
  _avg!: CollectionsAvgAggregate | null;

  @TypeGraphQL.Field(_type => CollectionsSumAggregate, {
    nullable: true
  })
  _sum!: CollectionsSumAggregate | null;

  @TypeGraphQL.Field(_type => CollectionsMinAggregate, {
    nullable: true
  })
  _min!: CollectionsMinAggregate | null;

  @TypeGraphQL.Field(_type => CollectionsMaxAggregate, {
    nullable: true
  })
  _max!: CollectionsMaxAggregate | null;
}
