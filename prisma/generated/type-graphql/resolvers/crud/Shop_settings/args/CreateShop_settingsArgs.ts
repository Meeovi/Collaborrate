import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shop_settingsCreateInput } from "../../../inputs/Shop_settingsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateShop_settingsArgs {
  @TypeGraphQL.Field(_type => Shop_settingsCreateInput, {
    nullable: false
  })
  data!: Shop_settingsCreateInput;
}
