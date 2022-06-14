import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentsWhereUniqueInput } from "../../../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCommentsArgs {
  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsWhereUniqueInput;
}
