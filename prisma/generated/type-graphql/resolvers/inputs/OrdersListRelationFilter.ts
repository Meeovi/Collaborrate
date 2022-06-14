import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersWhereInput } from "../inputs/OrdersWhereInput";

@TypeGraphQL.InputType("OrdersListRelationFilter", {
  isAbstract: true
})
export class OrdersListRelationFilter {
  @TypeGraphQL.Field(_type => OrdersWhereInput, {
    nullable: true
  })
  every?: OrdersWhereInput | undefined;

  @TypeGraphQL.Field(_type => OrdersWhereInput, {
    nullable: true
  })
  some?: OrdersWhereInput | undefined;

  @TypeGraphQL.Field(_type => OrdersWhereInput, {
    nullable: true
  })
  none?: OrdersWhereInput | undefined;
}
