import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsmarketingUpdateInput } from "../../../inputs/SettingsmarketingUpdateInput";
import { SettingsmarketingWhereUniqueInput } from "../../../inputs/SettingsmarketingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSettingsmarketingArgs {
  @TypeGraphQL.Field(_type => SettingsmarketingUpdateInput, {
    nullable: false
  })
  data!: SettingsmarketingUpdateInput;

  @TypeGraphQL.Field(_type => SettingsmarketingWhereUniqueInput, {
    nullable: false
  })
  where!: SettingsmarketingWhereUniqueInput;
}
