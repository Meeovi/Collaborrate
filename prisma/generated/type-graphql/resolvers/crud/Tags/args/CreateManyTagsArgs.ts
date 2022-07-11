import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsCreateManyInput } from "../../../inputs/TagsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTagsArgs {
  @TypeGraphQL.Field(_type => [TagsCreateManyInput], {
    nullable: false
  })
  data!: TagsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
