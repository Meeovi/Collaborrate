import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingscustomersCreateInput } from "../../../inputs/SettingscustomersCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSettingscustomersArgs {
  @TypeGraphQL.Field(_type => SettingscustomersCreateInput, {
    nullable: false
  })
  data!: SettingscustomersCreateInput;
}
