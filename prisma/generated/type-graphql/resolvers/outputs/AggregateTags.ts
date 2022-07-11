import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsAvgAggregate } from "../outputs/TagsAvgAggregate";
import { TagsCountAggregate } from "../outputs/TagsCountAggregate";
import { TagsMaxAggregate } from "../outputs/TagsMaxAggregate";
import { TagsMinAggregate } from "../outputs/TagsMinAggregate";
import { TagsSumAggregate } from "../outputs/TagsSumAggregate";

@TypeGraphQL.ObjectType("AggregateTags", {
  isAbstract: true
})
export class AggregateTags {
  @TypeGraphQL.Field(_type => TagsCountAggregate, {
    nullable: true
  })
  _count!: TagsCountAggregate | null;

  @TypeGraphQL.Field(_type => TagsAvgAggregate, {
    nullable: true
  })
  _avg!: TagsAvgAggregate | null;

  @TypeGraphQL.Field(_type => TagsSumAggregate, {
    nullable: true
  })
  _sum!: TagsSumAggregate | null;

  @TypeGraphQL.Field(_type => TagsMinAggregate, {
    nullable: true
  })
  _min!: TagsMinAggregate | null;

  @TypeGraphQL.Field(_type => TagsMaxAggregate, {
    nullable: true
  })
  _max!: TagsMaxAggregate | null;
}
