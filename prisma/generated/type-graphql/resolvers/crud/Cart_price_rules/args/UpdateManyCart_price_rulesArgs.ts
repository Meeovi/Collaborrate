import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Cart_price_rulesUpdateManyMutationInput } from "../../../inputs/Cart_price_rulesUpdateManyMutationInput";
import { Cart_price_rulesWhereInput } from "../../../inputs/Cart_price_rulesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCart_price_rulesArgs {
  @TypeGraphQL.Field(_type => Cart_price_rulesUpdateManyMutationInput, {
    nullable: false
  })
  data!: Cart_price_rulesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Cart_price_rulesWhereInput, {
    nullable: true
  })
  where?: Cart_price_rulesWhereInput | undefined;
}
