import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingscustomersUpdateInput } from "../../../inputs/SettingscustomersUpdateInput";
import { SettingscustomersWhereUniqueInput } from "../../../inputs/SettingscustomersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSettingscustomersArgs {
  @TypeGraphQL.Field(_type => SettingscustomersUpdateInput, {
    nullable: false
  })
  data!: SettingscustomersUpdateInput;

  @TypeGraphQL.Field(_type => SettingscustomersWhereUniqueInput, {
    nullable: false
  })
  where!: SettingscustomersWhereUniqueInput;
}
