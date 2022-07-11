import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingscustomersOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SettingscustomersOrderByWithRelationAndSearchRelevanceInput";
import { SettingscustomersWhereInput } from "../../../inputs/SettingscustomersWhereInput";
import { SettingscustomersWhereUniqueInput } from "../../../inputs/SettingscustomersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSettingscustomersArgs {
  @TypeGraphQL.Field(_type => SettingscustomersWhereInput, {
    nullable: true
  })
  where?: SettingscustomersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SettingscustomersOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: SettingscustomersOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => SettingscustomersWhereUniqueInput, {
    nullable: true
  })
  cursor?: SettingscustomersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
