import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentsWhereUniqueInput } from "../../../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCommentsArgs {
  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsWhereUniqueInput;
}
