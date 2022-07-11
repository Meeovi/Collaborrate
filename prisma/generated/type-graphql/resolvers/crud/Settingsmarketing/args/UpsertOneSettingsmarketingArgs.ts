import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsmarketingCreateInput } from "../../../inputs/SettingsmarketingCreateInput";
import { SettingsmarketingUpdateInput } from "../../../inputs/SettingsmarketingUpdateInput";
import { SettingsmarketingWhereUniqueInput } from "../../../inputs/SettingsmarketingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSettingsmarketingArgs {
  @TypeGraphQL.Field(_type => SettingsmarketingWhereUniqueInput, {
    nullable: false
  })
  where!: SettingsmarketingWhereUniqueInput;

  @TypeGraphQL.Field(_type => SettingsmarketingCreateInput, {
    nullable: false
  })
  create!: SettingsmarketingCreateInput;

  @TypeGraphQL.Field(_type => SettingsmarketingUpdateInput, {
    nullable: false
  })
  update!: SettingsmarketingUpdateInput;
}
