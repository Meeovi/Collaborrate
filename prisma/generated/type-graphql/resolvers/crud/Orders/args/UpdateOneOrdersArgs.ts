import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrdersUpdateInput } from "../../../inputs/OrdersUpdateInput";
import { OrdersWhereUniqueInput } from "../../../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOrdersArgs {
  @TypeGraphQL.Field(_type => OrdersUpdateInput, {
    nullable: false
  })
  data!: OrdersUpdateInput;

  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: false
  })
  where!: OrdersWhereUniqueInput;
}
