import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cart_price_rulesCreateInput } from "../../../inputs/Cart_price_rulesCreateInput";
import { Cart_price_rulesUpdateInput } from "../../../inputs/Cart_price_rulesUpdateInput";
import { Cart_price_rulesWhereUniqueInput } from "../../../inputs/Cart_price_rulesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCart_price_rulesArgs {
  @TypeGraphQL.Field(_type => Cart_price_rulesWhereUniqueInput, {
    nullable: false
  })
  where!: Cart_price_rulesWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cart_price_rulesCreateInput, {
    nullable: false
  })
  create!: Cart_price_rulesCreateInput;

  @TypeGraphQL.Field(_type => Cart_price_rulesUpdateInput, {
    nullable: false
  })
  update!: Cart_price_rulesUpdateInput;
}
