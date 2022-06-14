import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MediamanagerCreateInput } from "../../../inputs/MediamanagerCreateInput";
import { MediamanagerUpdateInput } from "../../../inputs/MediamanagerUpdateInput";
import { MediamanagerWhereUniqueInput } from "../../../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMediamanagerArgs {
  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: false
  })
  where!: MediamanagerWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediamanagerCreateInput, {
    nullable: false
  })
  create!: MediamanagerCreateInput;

  @TypeGraphQL.Field(_type => MediamanagerUpdateInput, {
    nullable: false
  })
  update!: MediamanagerUpdateInput;
}
