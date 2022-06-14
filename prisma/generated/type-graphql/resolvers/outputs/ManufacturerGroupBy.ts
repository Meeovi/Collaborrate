import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ManufacturerAvgAggregate } from "../outputs/ManufacturerAvgAggregate";
import { ManufacturerCountAggregate } from "../outputs/ManufacturerCountAggregate";
import { ManufacturerMaxAggregate } from "../outputs/ManufacturerMaxAggregate";
import { ManufacturerMinAggregate } from "../outputs/ManufacturerMinAggregate";
import { ManufacturerSumAggregate } from "../outputs/ManufacturerSumAggregate";

@TypeGraphQL.ObjectType("ManufacturerGroupBy", {
  isAbstract: true
})
export class ManufacturerGroupBy {
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
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isPublic!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  product!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media!: string | null;

  @TypeGraphQL.Field(_type => ManufacturerCountAggregate, {
    nullable: true
  })
  _count!: ManufacturerCountAggregate | null;

  @TypeGraphQL.Field(_type => ManufacturerAvgAggregate, {
    nullable: true
  })
  _avg!: ManufacturerAvgAggregate | null;

  @TypeGraphQL.Field(_type => ManufacturerSumAggregate, {
    nullable: true
  })
  _sum!: ManufacturerSumAggregate | null;

  @TypeGraphQL.Field(_type => ManufacturerMinAggregate, {
    nullable: true
  })
  _min!: ManufacturerMinAggregate | null;

  @TypeGraphQL.Field(_type => ManufacturerMaxAggregate, {
    nullable: true
  })
  _max!: ManufacturerMaxAggregate | null;
}
