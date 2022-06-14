import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shop_settingsWhereUniqueInput } from "../../../inputs/Shop_settingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteShop_settingsArgs {
  @TypeGraphQL.Field(_type => Shop_settingsWhereUniqueInput, {
    nullable: false
  })
  where!: Shop_settingsWhereUniqueInput;
}
