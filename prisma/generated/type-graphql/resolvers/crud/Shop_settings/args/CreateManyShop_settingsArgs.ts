import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shop_settingsCreateManyInput } from "../../../inputs/Shop_settingsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyShop_settingsArgs {
  @TypeGraphQL.Field(_type => [Shop_settingsCreateManyInput], {
    nullable: false
  })
  data!: Shop_settingsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
