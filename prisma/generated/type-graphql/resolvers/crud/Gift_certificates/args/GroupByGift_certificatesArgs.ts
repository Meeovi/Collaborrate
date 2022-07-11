import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Gift_certificatesOrderByWithAggregationInput } from "../../../inputs/Gift_certificatesOrderByWithAggregationInput";
import { Gift_certificatesScalarWhereWithAggregatesInput } from "../../../inputs/Gift_certificatesScalarWhereWithAggregatesInput";
import { Gift_certificatesWhereInput } from "../../../inputs/Gift_certificatesWhereInput";
import { Gift_certificatesScalarFieldEnum } from "../../../../enums/Gift_certificatesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGift_certificatesArgs {
  @TypeGraphQL.Field(_type => Gift_certificatesWhereInput, {
    nullable: true
  })
  where?: Gift_certificatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Gift_certificatesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Gift_certificatesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Gift_certificatesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "excerpt" | "discount" | "image" | "published" | "special_offers" | "rewards" | "coupons" | "expiration" | "categories" | "articles" | "products" | "customers" | "users" | "type">;

  @TypeGraphQL.Field(_type => Gift_certificatesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Gift_certificatesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
