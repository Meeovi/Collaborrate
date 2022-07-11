import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShopsOrderByWithAggregationInput } from "../../../inputs/ShopsOrderByWithAggregationInput";
import { ShopsScalarWhereWithAggregatesInput } from "../../../inputs/ShopsScalarWhereWithAggregatesInput";
import { ShopsWhereInput } from "../../../inputs/ShopsWhereInput";
import { ShopsScalarFieldEnum } from "../../../../enums/ShopsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByShopsArgs {
  @TypeGraphQL.Field(_type => ShopsWhereInput, {
    nullable: true
  })
  where?: ShopsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShopsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ShopsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShopsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "description" | "image" | "website" | "products" | "articles" | "customers" | "comments" | "coupons" | "categories" | "polls" | "quotes" | "reviews" | "gift_certificates" | "rating" | "tags" | "users" | "invoices" | "reports" | "reward_points" | "special_discounts" | "statistics" | "stocks" | "country" | "physical_store" | "type">;

  @TypeGraphQL.Field(_type => ShopsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ShopsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
