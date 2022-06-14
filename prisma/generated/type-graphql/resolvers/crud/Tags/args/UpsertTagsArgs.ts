import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsCreateInput } from "../../../inputs/TagsCreateInput";
import { TagsUpdateInput } from "../../../inputs/TagsUpdateInput";
import { TagsWhereUniqueInput } from "../../../inputs/TagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTagsArgs {
  @TypeGraphQL.Field(_type => TagsWhereUniqueInput, {
    nullable: false
  })
  where!: TagsWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsCreateInput, {
    nullable: false
  })
  create!: TagsCreateInput;

  @TypeGraphQL.Field(_type => TagsUpdateInput, {
    nullable: false
  })
  update!: TagsUpdateInput;
}
