import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shop_settingsUpdateManyMutationInput } from "../../../inputs/Shop_settingsUpdateManyMutationInput";
import { Shop_settingsWhereInput } from "../../../inputs/Shop_settingsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyShop_settingsArgs {
  @TypeGraphQL.Field(_type => Shop_settingsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Shop_settingsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Shop_settingsWhereInput, {
    nullable: true
  })
  where?: Shop_settingsWhereInput | undefined;
}
