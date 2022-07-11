import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingssalesUpdateManyMutationInput } from "../../../inputs/SettingssalesUpdateManyMutationInput";
import { SettingssalesWhereInput } from "../../../inputs/SettingssalesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySettingssalesArgs {
  @TypeGraphQL.Field(_type => SettingssalesUpdateManyMutationInput, {
    nullable: false
  })
  data!: SettingssalesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SettingssalesWhereInput, {
    nullable: true
  })
  where?: SettingssalesWhereInput | undefined;
}
