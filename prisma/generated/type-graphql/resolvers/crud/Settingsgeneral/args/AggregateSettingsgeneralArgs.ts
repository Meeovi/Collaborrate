import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SettingsgeneralOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SettingsgeneralOrderByWithRelationAndSearchRelevanceInput";
import { SettingsgeneralWhereInput } from "../../../inputs/SettingsgeneralWhereInput";
import { SettingsgeneralWhereUniqueInput } from "../../../inputs/SettingsgeneralWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSettingsgeneralArgs {
  @TypeGraphQL.Field(_type => SettingsgeneralWhereInput, {
    nullable: true
  })
  where?: SettingsgeneralWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SettingsgeneralOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: SettingsgeneralOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => SettingsgeneralWhereUniqueInput, {
    nullable: true
  })
  cursor?: SettingsgeneralWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
