import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentsWhereInput } from "../../../inputs/CommentsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCommentsArgs {
  @TypeGraphQL.Field(_type => CommentsWhereInput, {
    nullable: true
  })
  where?: CommentsWhereInput | undefined;
}
