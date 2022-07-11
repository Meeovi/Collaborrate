import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Core_storeAvgAggregate } from "../outputs/Core_storeAvgAggregate";
import { Core_storeCountAggregate } from "../outputs/Core_storeCountAggregate";
import { Core_storeMaxAggregate } from "../outputs/Core_storeMaxAggregate";
import { Core_storeMinAggregate } from "../outputs/Core_storeMinAggregate";
import { Core_storeSumAggregate } from "../outputs/Core_storeSumAggregate";

@TypeGraphQL.ObjectType("AggregateCore_store", {
  isAbstract: true
})
export class AggregateCore_store {
  @TypeGraphQL.Field(_type => Core_storeCountAggregate, {
    nullable: true
  })
  _count!: Core_storeCountAggregate | null;

  @TypeGraphQL.Field(_type => Core_storeAvgAggregate, {
    nullable: true
  })
  _avg!: Core_storeAvgAggregate | null;

  @TypeGraphQL.Field(_type => Core_storeSumAggregate, {
    nullable: true
  })
  _sum!: Core_storeSumAggregate | null;

  @TypeGraphQL.Field(_type => Core_storeMinAggregate, {
    nullable: true
  })
  _min!: Core_storeMinAggregate | null;

  @TypeGraphQL.Field(_type => Core_storeMaxAggregate, {
    nullable: true
  })
  _max!: Core_storeMaxAggregate | null;
}
