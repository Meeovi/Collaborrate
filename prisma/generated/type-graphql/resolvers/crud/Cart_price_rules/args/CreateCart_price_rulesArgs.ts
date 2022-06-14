import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cart_price_rulesCreateInput } from "../../../inputs/Cart_price_rulesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCart_price_rulesArgs {
  @TypeGraphQL.Field(_type => Cart_price_rulesCreateInput, {
    nullable: false
  })
  data!: Cart_price_rulesCreateInput;
}
