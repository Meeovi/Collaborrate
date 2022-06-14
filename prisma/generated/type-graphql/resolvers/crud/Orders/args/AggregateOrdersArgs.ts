import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrdersOrderByWithRelationInput } from "../../../inputs/OrdersOrderByWithRelationInput";
import { OrdersWhereInput } from "../../../inputs/OrdersWhereInput";
import { OrdersWhereUniqueInput } from "../../../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateOrdersArgs {
  @TypeGraphQL.Field(_type => OrdersWhereInput, {
    nullable: true
  })
  where?: OrdersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OrdersOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OrdersOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: true
  })
  cursor?: OrdersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
