import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cart_price_rulesWhereUniqueInput } from "../../../inputs/Cart_price_rulesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCart_price_rulesArgs {
  @TypeGraphQL.Field(_type => Cart_price_rulesWhereUniqueInput, {
    nullable: false
  })
  where!: Cart_price_rulesWhereUniqueInput;
}
