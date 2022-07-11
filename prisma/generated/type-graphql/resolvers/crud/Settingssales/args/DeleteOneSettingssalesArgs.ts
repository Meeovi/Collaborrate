import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingssalesWhereUniqueInput } from "../../../inputs/SettingssalesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSettingssalesArgs {
  @TypeGraphQL.Field(_type => SettingssalesWhereUniqueInput, {
    nullable: false
  })
  where!: SettingssalesWhereUniqueInput;
}
