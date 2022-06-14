import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsUpdateInput } from "../../../inputs/TagsUpdateInput";
import { TagsWhereUniqueInput } from "../../../inputs/TagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTagsArgs {
  @TypeGraphQL.Field(_type => TagsUpdateInput, {
    nullable: false
  })
  data!: TagsUpdateInput;

  @TypeGraphQL.Field(_type => TagsWhereUniqueInput, {
    nullable: false
  })
  where!: TagsWhereUniqueInput;
}
