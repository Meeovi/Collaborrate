import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shop_settingsUpdateInput } from "../../../inputs/Shop_settingsUpdateInput";
import { Shop_settingsWhereUniqueInput } from "../../../inputs/Shop_settingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneShop_settingsArgs {
  @TypeGraphQL.Field(_type => Shop_settingsUpdateInput, {
    nullable: false
  })
  data!: Shop_settingsUpdateInput;

  @TypeGraphQL.Field(_type => Shop_settingsWhereUniqueInput, {
    nullable: false
  })
  where!: Shop_settingsWhereUniqueInput;
}
