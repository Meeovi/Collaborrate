import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentsOrderByWithAggregationInput } from "../../../inputs/CommentsOrderByWithAggregationInput";
import { CommentsScalarWhereWithAggregatesInput } from "../../../inputs/CommentsScalarWhereWithAggregatesInput";
import { CommentsWhereInput } from "../../../inputs/CommentsWhereInput";
import { CommentsScalarFieldEnum } from "../../../../enums/CommentsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCommentsArgs {
  @TypeGraphQL.Field(_type => CommentsWhereInput, {
    nullable: true
  })
  where?: CommentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CommentsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CommentsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "customer_name" | "description" | "image" | "response" | "published" | "cust_id">;

  @TypeGraphQL.Field(_type => CommentsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CommentsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
