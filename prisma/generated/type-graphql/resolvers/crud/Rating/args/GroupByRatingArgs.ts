import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RatingOrderByWithAggregationInput } from "../../../inputs/RatingOrderByWithAggregationInput";
import { RatingScalarWhereWithAggregatesInput } from "../../../inputs/RatingScalarWhereWithAggregatesInput";
import { RatingWhereInput } from "../../../inputs/RatingWhereInput";
import { RatingScalarFieldEnum } from "../../../../enums/RatingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRatingArgs {
  @TypeGraphQL.Field(_type => RatingWhereInput, {
    nullable: true
  })
  where?: RatingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RatingOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: RatingOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "default_value" | "default_store_view" | "rating_visibility" | "active" | "sort_order" | "prod_id">;

  @TypeGraphQL.Field(_type => RatingScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: RatingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
