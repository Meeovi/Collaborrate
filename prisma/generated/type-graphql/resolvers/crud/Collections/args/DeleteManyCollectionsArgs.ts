import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionsWhereInput } from "../../../inputs/CollectionsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCollectionsArgs {
  @TypeGraphQL.Field(_type => CollectionsWhereInput, {
    nullable: true
  })
  where?: CollectionsWhereInput | undefined;
}
