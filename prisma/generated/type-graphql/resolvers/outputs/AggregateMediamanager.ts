import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerAvgAggregate } from "../outputs/MediamanagerAvgAggregate";
import { MediamanagerCountAggregate } from "../outputs/MediamanagerCountAggregate";
import { MediamanagerMaxAggregate } from "../outputs/MediamanagerMaxAggregate";
import { MediamanagerMinAggregate } from "../outputs/MediamanagerMinAggregate";
import { MediamanagerSumAggregate } from "../outputs/MediamanagerSumAggregate";

@TypeGraphQL.ObjectType("AggregateMediamanager", {
  isAbstract: true
})
export class AggregateMediamanager {
  @TypeGraphQL.Field(_type => MediamanagerCountAggregate, {
    nullable: true
  })
  _count!: MediamanagerCountAggregate | null;

  @TypeGraphQL.Field(_type => MediamanagerAvgAggregate, {
    nullable: true
  })
  _avg!: MediamanagerAvgAggregate | null;

  @TypeGraphQL.Field(_type => MediamanagerSumAggregate, {
    nullable: true
  })
  _sum!: MediamanagerSumAggregate | null;

  @TypeGraphQL.Field(_type => MediamanagerMinAggregate, {
    nullable: true
  })
  _min!: MediamanagerMinAggregate | null;

  @TypeGraphQL.Field(_type => MediamanagerMaxAggregate, {
    nullable: true
  })
  _max!: MediamanagerMaxAggregate | null;
}
