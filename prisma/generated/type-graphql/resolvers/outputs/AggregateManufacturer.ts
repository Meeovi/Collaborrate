import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ManufacturerAvgAggregate } from "../outputs/ManufacturerAvgAggregate";
import { ManufacturerCountAggregate } from "../outputs/ManufacturerCountAggregate";
import { ManufacturerMaxAggregate } from "../outputs/ManufacturerMaxAggregate";
import { ManufacturerMinAggregate } from "../outputs/ManufacturerMinAggregate";
import { ManufacturerSumAggregate } from "../outputs/ManufacturerSumAggregate";

@TypeGraphQL.ObjectType("AggregateManufacturer", {
  isAbstract: true
})
export class AggregateManufacturer {
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
