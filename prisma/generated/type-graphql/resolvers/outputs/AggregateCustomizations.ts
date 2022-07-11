import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomizationsAvgAggregate } from "../outputs/CustomizationsAvgAggregate";
import { CustomizationsCountAggregate } from "../outputs/CustomizationsCountAggregate";
import { CustomizationsMaxAggregate } from "../outputs/CustomizationsMaxAggregate";
import { CustomizationsMinAggregate } from "../outputs/CustomizationsMinAggregate";
import { CustomizationsSumAggregate } from "../outputs/CustomizationsSumAggregate";

@TypeGraphQL.ObjectType("AggregateCustomizations", {
  isAbstract: true
})
export class AggregateCustomizations {
  @TypeGraphQL.Field(_type => CustomizationsCountAggregate, {
    nullable: true
  })
  _count!: CustomizationsCountAggregate | null;

  @TypeGraphQL.Field(_type => CustomizationsAvgAggregate, {
    nullable: true
  })
  _avg!: CustomizationsAvgAggregate | null;

  @TypeGraphQL.Field(_type => CustomizationsSumAggregate, {
    nullable: true
  })
  _sum!: CustomizationsSumAggregate | null;

  @TypeGraphQL.Field(_type => CustomizationsMinAggregate, {
    nullable: true
  })
  _min!: CustomizationsMinAggregate | null;

  @TypeGraphQL.Field(_type => CustomizationsMaxAggregate, {
    nullable: true
  })
  _max!: CustomizationsMaxAggregate | null;
}
