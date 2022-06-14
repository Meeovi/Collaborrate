import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CollectionsAvgAggregate } from "../outputs/CollectionsAvgAggregate";
import { CollectionsCountAggregate } from "../outputs/CollectionsCountAggregate";
import { CollectionsMaxAggregate } from "../outputs/CollectionsMaxAggregate";
import { CollectionsMinAggregate } from "../outputs/CollectionsMinAggregate";
import { CollectionsSumAggregate } from "../outputs/CollectionsSumAggregate";

@TypeGraphQL.ObjectType("AggregateCollections", {
  isAbstract: true
})
export class AggregateCollections {
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
