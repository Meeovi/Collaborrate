import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CommentsOrderByWithRelationAndSearchRelevanceInput";
import { CommentsWhereInput } from "../../../inputs/CommentsWhereInput";
import { CommentsWhereUniqueInput } from "../../../inputs/CommentsWhereUniqueInput";
import { CommentsScalarFieldEnum } from "../../../../enums/CommentsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCommentsArgs {
  @TypeGraphQL.Field(_type => CommentsWhereInput, {
    nullable: true
  })
  where?: CommentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CommentsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: CommentsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: true
  })
  cursor?: CommentsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CommentsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "customer_name" | "description" | "image" | "response" | "published" | "cust_id"> | undefined;
}
