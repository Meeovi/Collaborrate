import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionsCreateInput } from "../../../inputs/CollectionsCreateInput";
import { CollectionsUpdateInput } from "../../../inputs/CollectionsUpdateInput";
import { CollectionsWhereUniqueInput } from "../../../inputs/CollectionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCollectionsArgs {
  @TypeGraphQL.Field(_type => CollectionsWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CollectionsCreateInput, {
    nullable: false
  })
  create!: CollectionsCreateInput;

  @TypeGraphQL.Field(_type => CollectionsUpdateInput, {
    nullable: false
  })
  update!: CollectionsUpdateInput;
}
