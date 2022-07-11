import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingssalesWhereInput } from "../../../inputs/SettingssalesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySettingssalesArgs {
  @TypeGraphQL.Field(_type => SettingssalesWhereInput, {
    nullable: true
  })
  where?: SettingssalesWhereInput | undefined;
}
