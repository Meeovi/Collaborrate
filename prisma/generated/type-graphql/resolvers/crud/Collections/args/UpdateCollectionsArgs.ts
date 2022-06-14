import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionsUpdateInput } from "../../../inputs/CollectionsUpdateInput";
import { CollectionsWhereUniqueInput } from "../../../inputs/CollectionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCollectionsArgs {
  @TypeGraphQL.Field(_type => CollectionsUpdateInput, {
    nullable: false
  })
  data!: CollectionsUpdateInput;

  @TypeGraphQL.Field(_type => CollectionsWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionsWhereUniqueInput;
}
