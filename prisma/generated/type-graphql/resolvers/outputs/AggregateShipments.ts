import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShipmentsAvgAggregate } from "../outputs/ShipmentsAvgAggregate";
import { ShipmentsCountAggregate } from "../outputs/ShipmentsCountAggregate";
import { ShipmentsMaxAggregate } from "../outputs/ShipmentsMaxAggregate";
import { ShipmentsMinAggregate } from "../outputs/ShipmentsMinAggregate";
import { ShipmentsSumAggregate } from "../outputs/ShipmentsSumAggregate";

@TypeGraphQL.ObjectType("AggregateShipments", {
  isAbstract: true
})
export class AggregateShipments {
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
