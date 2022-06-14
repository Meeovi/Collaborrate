import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingshopUpdateManyMutationInput } from "../../../inputs/SettingshopUpdateManyMutationInput";
import { SettingshopWhereInput } from "../../../inputs/SettingshopWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySettingshopArgs {
  @TypeGraphQL.Field(_type => SettingshopUpdateManyMutationInput, {
    nullable: false
  })
  data!: SettingshopUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SettingshopWhereInput, {
    nullable: true
  })
  where?: SettingshopWhereInput | undefined;
}
