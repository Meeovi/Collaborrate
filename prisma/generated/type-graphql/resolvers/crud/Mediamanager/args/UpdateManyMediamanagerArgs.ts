import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MediamanagerUpdateManyMutationInput } from "../../../inputs/MediamanagerUpdateManyMutationInput";
import { MediamanagerWhereInput } from "../../../inputs/MediamanagerWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMediamanagerArgs {
  @TypeGraphQL.Field(_type => MediamanagerUpdateManyMutationInput, {
    nullable: false
  })
  data!: MediamanagerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MediamanagerWhereInput, {
    nullable: true
  })
  where?: MediamanagerWhereInput | undefined;
}
