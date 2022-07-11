import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersScalarWhereInput } from "../inputs/OrdersScalarWhereInput";
import { OrdersUpdateManyMutationInput } from "../inputs/OrdersUpdateManyMutationInput";

@TypeGraphQL.InputType("OrdersUpdateManyWithWhereWithoutCustomersInput", {
  isAbstract: true
})
export class OrdersUpdateManyWithWhereWithoutCustomersInput {
  @TypeGraphQL.Field(_type => OrdersScalarWhereInput, {
    nullable: false
  })
  where!: OrdersScalarWhereInput;

  @TypeGraphQL.Field(_type => OrdersUpdateManyMutationInput, {
    nullable: false
  })
  data!: OrdersUpdateManyMutationInput;
}
