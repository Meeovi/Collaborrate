import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrdersCreateInput } from "../../../inputs/OrdersCreateInput";
import { OrdersUpdateInput } from "../../../inputs/OrdersUpdateInput";
import { OrdersWhereUniqueInput } from "../../../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOrdersArgs {
  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: false
  })
  where!: OrdersWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrdersCreateInput, {
    nullable: false
  })
  create!: OrdersCreateInput;

  @TypeGraphQL.Field(_type => OrdersUpdateInput, {
    nullable: false
  })
  update!: OrdersUpdateInput;
}
