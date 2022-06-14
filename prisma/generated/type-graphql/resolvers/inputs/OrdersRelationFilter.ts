import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersWhereInput } from "../inputs/OrdersWhereInput";

@TypeGraphQL.InputType("OrdersRelationFilter", {
  isAbstract: true
})
export class OrdersRelationFilter {
  @TypeGraphQL.Field(_type => OrdersWhereInput, {
    nullable: true
  })
  is?: OrdersWhereInput | undefined;

  @TypeGraphQL.Field(_type => OrdersWhereInput, {
    nullable: true
  })
  isNot?: OrdersWhereInput | undefined;
}
