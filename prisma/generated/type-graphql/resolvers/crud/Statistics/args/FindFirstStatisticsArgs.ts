import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatisticsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/StatisticsOrderByWithRelationAndSearchRelevanceInput";
import { StatisticsWhereInput } from "../../../inputs/StatisticsWhereInput";
import { StatisticsWhereUniqueInput } from "../../../inputs/StatisticsWhereUniqueInput";
import { StatisticsScalarFieldEnum } from "../../../../enums/StatisticsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstStatisticsArgs {
  @TypeGraphQL.Field(_type => StatisticsWhereInput, {
    nullable: true
  })
  where?: StatisticsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StatisticsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: StatisticsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => StatisticsWhereUniqueInput, {
    nullable: true
  })
  cursor?: StatisticsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [StatisticsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "excerpt" | "description" | "image" | "published" | "special_offers" | "reports" | "rewards" | "coupons" | "expiration" | "categories" | "articles" | "products" | "customers" | "users"> | undefined;
}
