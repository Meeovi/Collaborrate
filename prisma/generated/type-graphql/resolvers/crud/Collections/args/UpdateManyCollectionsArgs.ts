import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionsUpdateManyMutationInput } from "../../../inputs/CollectionsUpdateManyMutationInput";
import { CollectionsWhereInput } from "../../../inputs/CollectionsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCollectionsArgs {
  @TypeGraphQL.Field(_type => CollectionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: CollectionsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CollectionsWhereInput, {
    nullable: true
  })
  where?: CollectionsWhereInput | undefined;
}
