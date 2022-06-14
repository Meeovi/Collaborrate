import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentsUpdateManyMutationInput } from "../../../inputs/CommentsUpdateManyMutationInput";
import { CommentsWhereInput } from "../../../inputs/CommentsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCommentsArgs {
  @TypeGraphQL.Field(_type => CommentsUpdateManyMutationInput, {
    nullable: false
  })
  data!: CommentsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CommentsWhereInput, {
    nullable: true
  })
  where?: CommentsWhereInput | undefined;
}
