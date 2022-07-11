import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShipmentsAvgAggregate } from "../outputs/ShipmentsAvgAggregate";
import { ShipmentsCountAggregate } from "../outputs/ShipmentsCountAggregate";
import { ShipmentsMaxAggregate } from "../outputs/ShipmentsMaxAggregate";
import { ShipmentsMinAggregate } from "../outputs/ShipmentsMinAggregate";
import { ShipmentsSumAggregate } from "../outputs/ShipmentsSumAggregate";

@TypeGraphQL.ObjectType("ShipmentsGroupBy", {
  isAbstract: true
})
export class ShipmentsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  speed_grade!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  ship_date!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  carrier_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  transit_time!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tracking_url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  client_secret!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website!: string | null;

  @TypeGraphQL.Field(_type => ShipmentsCountAggregate, {
    nullable: true
  })
  _count!: ShipmentsCountAggregate | null;

  @TypeGraphQL.Field(_type => ShipmentsAvgAggregate, {
    nullable: true
  })
  _avg!: ShipmentsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ShipmentsSumAggregate, {
    nullable: true
  })
  _sum!: ShipmentsSumAggregate | null;

  @TypeGraphQL.Field(_type => ShipmentsMinAggregate, {
    nullable: true
  })
  _min!: ShipmentsMinAggregate | null;

  @TypeGraphQL.Field(_type => ShipmentsMaxAggregate, {
    nullable: true
  })
  _max!: ShipmentsMaxAggregate | null;
}
