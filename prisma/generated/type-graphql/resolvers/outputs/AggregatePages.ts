import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PagesAvgAggregate } from "../outputs/PagesAvgAggregate";
import { PagesCountAggregate } from "../outputs/PagesCountAggregate";
import { PagesMaxAggregate } from "../outputs/PagesMaxAggregate";
import { PagesMinAggregate } from "../outputs/PagesMinAggregate";
import { PagesSumAggregate } from "../outputs/PagesSumAggregate";

@TypeGraphQL.ObjectType("AggregatePages", {
  isAbstract: true
})
export class AggregatePages {
  @TypeGraphQL.Field(_type => PagesCountAggregate, {
    nullable: true
  })
  _count!: PagesCountAggregate | null;

  @TypeGraphQL.Field(_type => PagesAvgAggregate, {
    nullable: true
  })
  _avg!: PagesAvgAggregate | null;

  @TypeGraphQL.Field(_type => PagesSumAggregate, {
    nullable: true
  })
  _sum!: PagesSumAggregate | null;

  @TypeGraphQL.Field(_type => PagesMinAggregate, {
    nullable: true
  })
  _min!: PagesMinAggregate | null;

  @TypeGraphQL.Field(_type => PagesMaxAggregate, {
    nullable: true
  })
  _max!: PagesMaxAggregate | null;
}
