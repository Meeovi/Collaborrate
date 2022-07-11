import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentsCreateInput } from "../../../inputs/CommentsCreateInput";
import { CommentsUpdateInput } from "../../../inputs/CommentsUpdateInput";
import { CommentsWhereUniqueInput } from "../../../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCommentsArgs {
  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentsCreateInput, {
    nullable: false
  })
  create!: CommentsCreateInput;

  @TypeGraphQL.Field(_type => CommentsUpdateInput, {
    nullable: false
  })
  update!: CommentsUpdateInput;
}
