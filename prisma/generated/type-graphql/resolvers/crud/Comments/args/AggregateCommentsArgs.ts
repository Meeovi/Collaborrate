import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentsOrderByWithRelationInput } from "../../../inputs/CommentsOrderByWithRelationInput";
import { CommentsWhereInput } from "../../../inputs/CommentsWhereInput";
import { CommentsWhereUniqueInput } from "../../../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCommentsArgs {
  @TypeGraphQL.Field(_type => CommentsWhereInput, {
    nullable: true
  })
  where?: CommentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CommentsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CommentsOrderByWithRelationInput[] | undefined;

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
}
