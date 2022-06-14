import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingssalesCreateInput } from "../../../inputs/SettingssalesCreateInput";
import { SettingssalesUpdateInput } from "../../../inputs/SettingssalesUpdateInput";
import { SettingssalesWhereUniqueInput } from "../../../inputs/SettingssalesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSettingssalesArgs {
  @TypeGraphQL.Field(_type => SettingssalesWhereUniqueInput, {
    nullable: false
  })
  where!: SettingssalesWhereUniqueInput;

  @TypeGraphQL.Field(_type => SettingssalesCreateInput, {
    nullable: false
  })
  create!: SettingssalesCreateInput;

  @TypeGraphQL.Field(_type => SettingssalesUpdateInput, {
    nullable: false
  })
  update!: SettingssalesUpdateInput;
}
