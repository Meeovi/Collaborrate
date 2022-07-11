import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MediamanagerUpdateInput } from "../../../inputs/MediamanagerUpdateInput";
import { MediamanagerWhereUniqueInput } from "../../../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMediamanagerArgs {
  @TypeGraphQL.Field(_type => MediamanagerUpdateInput, {
    nullable: false
  })
  data!: MediamanagerUpdateInput;

  @TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput, {
    nullable: false
  })
  where!: MediamanagerWhereUniqueInput;
}
