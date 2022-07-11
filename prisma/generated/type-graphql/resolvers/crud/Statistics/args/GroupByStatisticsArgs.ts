import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatisticsOrderByWithAggregationInput } from "../../../inputs/StatisticsOrderByWithAggregationInput";
import { StatisticsScalarWhereWithAggregatesInput } from "../../../inputs/StatisticsScalarWhereWithAggregatesInput";
import { StatisticsWhereInput } from "../../../inputs/StatisticsWhereInput";
import { StatisticsScalarFieldEnum } from "../../../../enums/StatisticsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByStatisticsArgs {
  @TypeGraphQL.Field(_type => StatisticsWhereInput, {
    nullable: true
  })
  where?: StatisticsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StatisticsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: StatisticsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [StatisticsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "excerpt" | "description" | "image" | "published" | "special_offers" | "reports" | "rewards" | "coupons" | "expiration" | "categories" | "articles" | "products" | "customers" | "users">;

  @TypeGraphQL.Field(_type => StatisticsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: StatisticsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
