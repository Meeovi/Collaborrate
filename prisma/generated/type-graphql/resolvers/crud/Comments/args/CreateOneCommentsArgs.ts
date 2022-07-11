import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentsCreateInput } from "../../../inputs/CommentsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCommentsArgs {
  @TypeGraphQL.Field(_type => CommentsCreateInput, {
    nullable: false
  })
  data!: CommentsCreateInput;
}
