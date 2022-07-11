import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingssalesCreateInput } from "../../../inputs/SettingssalesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSettingssalesArgs {
  @TypeGraphQL.Field(_type => SettingssalesCreateInput, {
    nullable: false
  })
  data!: SettingssalesCreateInput;
}
