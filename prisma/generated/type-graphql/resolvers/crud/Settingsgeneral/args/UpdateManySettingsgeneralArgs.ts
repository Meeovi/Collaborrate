import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsgeneralUpdateManyMutationInput } from "../../../inputs/SettingsgeneralUpdateManyMutationInput";
import { SettingsgeneralWhereInput } from "../../../inputs/SettingsgeneralWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySettingsgeneralArgs {
  @TypeGraphQL.Field(_type => SettingsgeneralUpdateManyMutationInput, {
    nullable: false
  })
  data!: SettingsgeneralUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SettingsgeneralWhereInput, {
    nullable: true
  })
  where?: SettingsgeneralWhereInput | undefined;
}
