import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThemesAvgAggregate } from "../outputs/ThemesAvgAggregate";
import { ThemesCountAggregate } from "../outputs/ThemesCountAggregate";
import { ThemesMaxAggregate } from "../outputs/ThemesMaxAggregate";
import { ThemesMinAggregate } from "../outputs/ThemesMinAggregate";
import { ThemesSumAggregate } from "../outputs/ThemesSumAggregate";

@TypeGraphQL.ObjectType("AggregateThemes", {
  isAbstract: true
})
export class AggregateThemes {
  @TypeGraphQL.Field(_type => ThemesCountAggregate, {
    nullable: true
  })
  _count!: ThemesCountAggregate | null;

  @TypeGraphQL.Field(_type => ThemesAvgAggregate, {
    nullable: true
  })
  _avg!: ThemesAvgAggregate | null;

  @TypeGraphQL.Field(_type => ThemesSumAggregate, {
    nullable: true
  })
  _sum!: ThemesSumAggregate | null;

  @TypeGraphQL.Field(_type => ThemesMinAggregate, {
    nullable: true
  })
  _min!: ThemesMinAggregate | null;

  @TypeGraphQL.Field(_type => ThemesMaxAggregate, {
    nullable: true
  })
  _max!: ThemesMaxAggregate | null;
}
