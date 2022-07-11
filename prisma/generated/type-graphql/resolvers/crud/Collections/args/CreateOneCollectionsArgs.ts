import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionsCreateInput } from "../../../inputs/CollectionsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCollectionsArgs {
  @TypeGraphQL.Field(_type => CollectionsCreateInput, {
    nullable: false
  })
  data!: CollectionsCreateInput;
}
