import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shop_settingsCreateInput } from "../../../inputs/Shop_settingsCreateInput";
import { Shop_settingsUpdateInput } from "../../../inputs/Shop_settingsUpdateInput";
import { Shop_settingsWhereUniqueInput } from "../../../inputs/Shop_settingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertShop_settingsArgs {
  @TypeGraphQL.Field(_type => Shop_settingsWhereUniqueInput, {
    nullable: false
  })
  where!: Shop_settingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Shop_settingsCreateInput, {
    nullable: false
  })
  create!: Shop_settingsCreateInput;

  @TypeGraphQL.Field(_type => Shop_settingsUpdateInput, {
    nullable: false
  })
  update!: Shop_settingsUpdateInput;
}
