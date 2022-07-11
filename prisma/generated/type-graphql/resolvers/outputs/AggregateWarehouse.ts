import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WarehouseAvgAggregate } from "../outputs/WarehouseAvgAggregate";
import { WarehouseCountAggregate } from "../outputs/WarehouseCountAggregate";
import { WarehouseMaxAggregate } from "../outputs/WarehouseMaxAggregate";
import { WarehouseMinAggregate } from "../outputs/WarehouseMinAggregate";
import { WarehouseSumAggregate } from "../outputs/WarehouseSumAggregate";

@TypeGraphQL.ObjectType("AggregateWarehouse", {
  isAbstract: true
})
export class AggregateWarehouse {
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
