import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudienceAvgAggregate } from "../outputs/AudienceAvgAggregate";
import { AudienceCountAggregate } from "../outputs/AudienceCountAggregate";
import { AudienceMaxAggregate } from "../outputs/AudienceMaxAggregate";
import { AudienceMinAggregate } from "../outputs/AudienceMinAggregate";
import { AudienceSumAggregate } from "../outputs/AudienceSumAggregate";

@TypeGraphQL.ObjectType("AudienceGroupBy", {
  isAbstract: true
})
export class AudienceGroupBy {
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
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  query!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastUsed!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  timesUsed!: number | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  rperm!: string[] | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  wperm!: string[] | null;

  @TypeGraphQL.Field(_type => AudienceCountAggregate, {
    nullable: true
  })
  _count!: AudienceCountAggregate | null;

  @TypeGraphQL.Field(_type => AudienceAvgAggregate, {
    nullable: true
  })
  _avg!: AudienceAvgAggregate | null;

  @TypeGraphQL.Field(_type => AudienceSumAggregate, {
    nullable: true
  })
  _sum!: AudienceSumAggregate | null;

  @TypeGraphQL.Field(_type => AudienceMinAggregate, {
    nullable: true
  })
  _min!: AudienceMinAggregate | null;

  @TypeGraphQL.Field(_type => AudienceMaxAggregate, {
    nullable: true
  })
  _max!: AudienceMaxAggregate | null;
}
