import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SourceAvgAggregate } from "../outputs/SourceAvgAggregate";
import { SourceCountAggregate } from "../outputs/SourceCountAggregate";
import { SourceMaxAggregate } from "../outputs/SourceMaxAggregate";
import { SourceMinAggregate } from "../outputs/SourceMinAggregate";
import { SourceSumAggregate } from "../outputs/SourceSumAggregate";

@TypeGraphQL.ObjectType("SourceGroupBy", {
  isAbstract: true
})
export class SourceGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  code!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  enabled!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  latitude!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  longitude!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  pickup_location!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contact_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  phone!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  fax!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  street!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  postcode!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => SourceCountAggregate, {
    nullable: true
  })
  _count!: SourceCountAggregate | null;

  @TypeGraphQL.Field(_type => SourceAvgAggregate, {
    nullable: true
  })
  _avg!: SourceAvgAggregate | null;

  @TypeGraphQL.Field(_type => SourceSumAggregate, {
    nullable: true
  })
  _sum!: SourceSumAggregate | null;

  @TypeGraphQL.Field(_type => SourceMinAggregate, {
    nullable: true
  })
  _min!: SourceMinAggregate | null;

  @TypeGraphQL.Field(_type => SourceMaxAggregate, {
    nullable: true
  })
  _max!: SourceMaxAggregate | null;
}
