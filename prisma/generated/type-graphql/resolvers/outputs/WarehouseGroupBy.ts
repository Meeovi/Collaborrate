import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WarehouseAvgAggregate } from "../outputs/WarehouseAvgAggregate";
import { WarehouseCountAggregate } from "../outputs/WarehouseCountAggregate";
import { WarehouseMaxAggregate } from "../outputs/WarehouseMaxAggregate";
import { WarehouseMinAggregate } from "../outputs/WarehouseMinAggregate";
import { WarehouseSumAggregate } from "../outputs/WarehouseSumAggregate";

@TypeGraphQL.ObjectType("WarehouseGroupBy", {
  isAbstract: true
})
export class WarehouseGroupBy {
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
  city!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postal!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  products!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  category!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isPublic!: string | null;

  @TypeGraphQL.Field(_type => WarehouseCountAggregate, {
    nullable: true
  })
  _count!: WarehouseCountAggregate | null;

  @TypeGraphQL.Field(_type => WarehouseAvgAggregate, {
    nullable: true
  })
  _avg!: WarehouseAvgAggregate | null;

  @TypeGraphQL.Field(_type => WarehouseSumAggregate, {
    nullable: true
  })
  _sum!: WarehouseSumAggregate | null;

  @TypeGraphQL.Field(_type => WarehouseMinAggregate, {
    nullable: true
  })
  _min!: WarehouseMinAggregate | null;

  @TypeGraphQL.Field(_type => WarehouseMaxAggregate, {
    nullable: true
  })
  _max!: WarehouseMaxAggregate | null;
}
