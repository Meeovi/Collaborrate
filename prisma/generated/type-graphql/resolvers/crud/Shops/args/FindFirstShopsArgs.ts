import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShopsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ShopsOrderByWithRelationAndSearchRelevanceInput";
import { ShopsWhereInput } from "../../../inputs/ShopsWhereInput";
import { ShopsWhereUniqueInput } from "../../../inputs/ShopsWhereUniqueInput";
import { ShopsScalarFieldEnum } from "../../../../enums/ShopsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstShopsArgs {
  @TypeGraphQL.Field(_type => ShopsWhereInput, {
    nullable: true
  })
  where?: ShopsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShopsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: ShopsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => ShopsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ShopsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ShopsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "description" | "image" | "website" | "products" | "articles" | "customers" | "comments" | "coupons" | "categories" | "polls" | "quotes" | "reviews" | "gift_certificates" | "rating" | "tags" | "users" | "invoices" | "reports" | "reward_points" | "special_discounts" | "statistics" | "stocks" | "country" | "physical_store" | "type"> | undefined;
}
