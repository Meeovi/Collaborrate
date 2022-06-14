import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingscustomersUpdateManyMutationInput } from "../../../inputs/SettingscustomersUpdateManyMutationInput";
import { SettingscustomersWhereInput } from "../../../inputs/SettingscustomersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySettingscustomersArgs {
  @TypeGraphQL.Field(_type => SettingscustomersUpdateManyMutationInput, {
    nullable: false
  })
  data!: SettingscustomersUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SettingscustomersWhereInput, {
    nullable: true
  })
  where?: SettingscustomersWhereInput | undefined;
}
