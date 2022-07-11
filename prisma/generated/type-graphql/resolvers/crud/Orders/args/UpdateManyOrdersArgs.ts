import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrdersUpdateManyMutationInput } from "../../../inputs/OrdersUpdateManyMutationInput";
import { OrdersWhereInput } from "../../../inputs/OrdersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOrdersArgs {
  @TypeGraphQL.Field(_type => OrdersUpdateManyMutationInput, {
    nullable: false
  })
  data!: OrdersUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OrdersWhereInput, {
    nullable: true
  })
  where?: OrdersWhereInput | undefined;
}
