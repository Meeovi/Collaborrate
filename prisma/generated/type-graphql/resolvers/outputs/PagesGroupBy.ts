import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PagesAvgAggregate } from "../outputs/PagesAvgAggregate";
import { PagesCountAggregate } from "../outputs/PagesCountAggregate";
import { PagesMaxAggregate } from "../outputs/PagesMaxAggregate";
import { PagesMinAggregate } from "../outputs/PagesMinAggregate";
import { PagesSumAggregate } from "../outputs/PagesSumAggregate";

@TypeGraphQL.ObjectType("PagesGroupBy", {
  isAbstract: true
})
export class PagesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  enable_page!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content_title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url_key!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_keywords!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_description!: string | null;

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
