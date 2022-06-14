import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingscustomersCreateInput } from "../../../inputs/SettingscustomersCreateInput";
import { SettingscustomersUpdateInput } from "../../../inputs/SettingscustomersUpdateInput";
import { SettingscustomersWhereUniqueInput } from "../../../inputs/SettingscustomersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSettingscustomersArgs {
  @TypeGraphQL.Field(_type => SettingscustomersWhereUniqueInput, {
    nullable: false
  })
  where!: SettingscustomersWhereUniqueInput;

  @TypeGraphQL.Field(_type => SettingscustomersCreateInput, {
    nullable: false
  })
  create!: SettingscustomersCreateInput;

  @TypeGraphQL.Field(_type => SettingscustomersUpdateInput, {
    nullable: false
  })
  update!: SettingscustomersUpdateInput;
}
