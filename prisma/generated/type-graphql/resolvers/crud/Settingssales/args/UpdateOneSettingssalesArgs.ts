import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingssalesUpdateInput } from "../../../inputs/SettingssalesUpdateInput";
import { SettingssalesWhereUniqueInput } from "../../../inputs/SettingssalesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSettingssalesArgs {
  @TypeGraphQL.Field(_type => SettingssalesUpdateInput, {
    nullable: false
  })
  data!: SettingssalesUpdateInput;

  @TypeGraphQL.Field(_type => SettingssalesWhereUniqueInput, {
    nullable: false
  })
  where!: SettingssalesWhereUniqueInput;
}
