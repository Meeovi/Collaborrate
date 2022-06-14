import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { General_settingsUpdateManyMutationInput } from "../../../inputs/General_settingsUpdateManyMutationInput";
import { General_settingsWhereInput } from "../../../inputs/General_settingsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGeneral_settingsArgs {
  @TypeGraphQL.Field(_type => General_settingsUpdateManyMutationInput, {
    nullable: false
  })
  data!: General_settingsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => General_settingsWhereInput, {
    nullable: true
  })
  where?: General_settingsWhereInput | undefined;
}
