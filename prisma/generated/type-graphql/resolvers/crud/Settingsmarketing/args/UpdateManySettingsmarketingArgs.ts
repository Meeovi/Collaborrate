import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsmarketingUpdateManyMutationInput } from "../../../inputs/SettingsmarketingUpdateManyMutationInput";
import { SettingsmarketingWhereInput } from "../../../inputs/SettingsmarketingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySettingsmarketingArgs {
  @TypeGraphQL.Field(_type => SettingsmarketingUpdateManyMutationInput, {
    nullable: false
  })
  data!: SettingsmarketingUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SettingsmarketingWhereInput, {
    nullable: true
  })
  where?: SettingsmarketingWhereInput | undefined;
}
