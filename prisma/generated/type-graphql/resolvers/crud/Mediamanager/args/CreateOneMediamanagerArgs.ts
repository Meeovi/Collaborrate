import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MediamanagerCreateInput } from "../../../inputs/MediamanagerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMediamanagerArgs {
  @TypeGraphQL.Field(_type => MediamanagerCreateInput, {
    nullable: false
  })
  data!: MediamanagerCreateInput;
}