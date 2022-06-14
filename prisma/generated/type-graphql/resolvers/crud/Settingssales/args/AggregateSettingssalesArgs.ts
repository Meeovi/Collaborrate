import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingssalesOrderByWithRelationInput } from "../../../inputs/SettingssalesOrderByWithRelationInput";
import { SettingssalesWhereInput } from "../../../inputs/SettingssalesWhereInput";
import { SettingssalesWhereUniqueInput } from "../../../inputs/SettingssalesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSettingssalesArgs {
  @TypeGraphQL.Field(_type => SettingssalesWhereInput, {
    nullable: true
  })
  where?: SettingssalesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SettingssalesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SettingssalesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SettingssalesWhereUniqueInput, {
    nullable: true
  })
  cursor?: SettingssalesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
