import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsUpdateManyMutationInput } from "../../../inputs/TagsUpdateManyMutationInput";
import { TagsWhereInput } from "../../../inputs/TagsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTagsArgs {
  @TypeGraphQL.Field(_type => TagsUpdateManyMutationInput, {
    nullable: false
  })
  data!: TagsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TagsWhereInput, {
    nullable: true
  })
  where?: TagsWhereInput | undefined;
}
