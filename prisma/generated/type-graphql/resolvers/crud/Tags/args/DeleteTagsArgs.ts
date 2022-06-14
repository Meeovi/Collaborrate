import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsWhereUniqueInput } from "../../../inputs/TagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTagsArgs {
  @TypeGraphQL.Field(_type => TagsWhereUniqueInput, {
    nullable: false
  })
  where!: TagsWhereUniqueInput;
}
