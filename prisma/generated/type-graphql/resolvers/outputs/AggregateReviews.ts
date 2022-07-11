import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewsAvgAggregate } from "../outputs/ReviewsAvgAggregate";
import { ReviewsCountAggregate } from "../outputs/ReviewsCountAggregate";
import { ReviewsMaxAggregate } from "../outputs/ReviewsMaxAggregate";
import { ReviewsMinAggregate } from "../outputs/ReviewsMinAggregate";
import { ReviewsSumAggregate } from "../outputs/ReviewsSumAggregate";

@TypeGraphQL.ObjectType("AggregateReviews", {
  isAbstract: true
})
export class AggregateReviews {
  @TypeGraphQL.Field(_type => ReviewsCountAggregate, {
    nullable: true
  })
  _count!: ReviewsCountAggregate | null;

  @TypeGraphQL.Field(_type => ReviewsAvgAggregate, {
    nullable: true
  })
  _avg!: ReviewsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ReviewsSumAggregate, {
    nullable: true
  })
  _sum!: ReviewsSumAggregate | null;

  @TypeGraphQL.Field(_type => ReviewsMinAggregate, {
    nullable: true
  })
  _min!: ReviewsMinAggregate | null;

  @TypeGraphQL.Field(_type => ReviewsMaxAggregate, {
    nullable: true
  })
  _max!: ReviewsMaxAggregate | null;
}
