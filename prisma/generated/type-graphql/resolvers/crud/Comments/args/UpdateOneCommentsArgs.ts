import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentsUpdateInput } from "../../../inputs/CommentsUpdateInput";
import { CommentsWhereUniqueInput } from "../../../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCommentsArgs {
  @TypeGraphQL.Field(_type => CommentsUpdateInput, {
    nullable: false
  })
  data!: CommentsUpdateInput;

  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsWhereUniqueInput;
}
