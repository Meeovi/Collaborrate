import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingssalesAvgAggregate } from "../outputs/SettingssalesAvgAggregate";
import { SettingssalesCountAggregate } from "../outputs/SettingssalesCountAggregate";
import { SettingssalesMaxAggregate } from "../outputs/SettingssalesMaxAggregate";
import { SettingssalesMinAggregate } from "../outputs/SettingssalesMinAggregate";
import { SettingssalesSumAggregate } from "../outputs/SettingssalesSumAggregate";

@TypeGraphQL.ObjectType("AggregateSettingssales", {
  isAbstract: true
})
export class AggregateSettingssales {
  @TypeGraphQL.Field(_type => SettingssalesCountAggregate, {
    nullable: true
  })
  _count!: SettingssalesCountAggregate | null;

  @TypeGraphQL.Field(_type => SettingssalesAvgAggregate, {
    nullable: true
  })
  _avg!: SettingssalesAvgAggregate | null;

  @TypeGraphQL.Field(_type => SettingssalesSumAggregate, {
    nullable: true
  })
  _sum!: SettingssalesSumAggregate | null;

  @TypeGraphQL.Field(_type => SettingssalesMinAggregate, {
    nullable: true
  })
  _min!: SettingssalesMinAggregate | null;

  @TypeGraphQL.Field(_type => SettingssalesMaxAggregate, {
    nullable: true
  })
  _max!: SettingssalesMaxAggregate | null;
}
