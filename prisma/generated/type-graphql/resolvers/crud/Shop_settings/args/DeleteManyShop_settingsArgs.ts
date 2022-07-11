import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shop_settingsWhereInput } from "../../../inputs/Shop_settingsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyShop_settingsArgs {
  @TypeGraphQL.Field(_type => Shop_settingsWhereInput, {
    nullable: true
  })
  where?: Shop_settingsWhereInput | undefined;
}
