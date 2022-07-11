import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MediamanagerWhereInput } from "../../../inputs/MediamanagerWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMediamanagerArgs {
  @TypeGraphQL.Field(_type => MediamanagerWhereInput, {
    nullable: true
  })
  where?: MediamanagerWhereInput | undefined;
}
