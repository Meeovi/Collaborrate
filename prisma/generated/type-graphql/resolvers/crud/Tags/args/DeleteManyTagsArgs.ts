import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsWhereInput } from "../../../inputs/TagsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTagsArgs {
  @TypeGraphQL.Field(_type => TagsWhereInput, {
    nullable: true
  })
  where?: TagsWhereInput | undefined;
}
