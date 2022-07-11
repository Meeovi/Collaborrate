import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateManyCustomersInput } from "../inputs/OrdersCreateManyCustomersInput";

@TypeGraphQL.InputType("OrdersCreateManyCustomersInputEnvelope", {
  isAbstract: true
})
export class OrdersCreateManyCustomersInputEnvelope {
  @TypeGraphQL.Field(_type => [OrdersCreateManyCustomersInput], {
    nullable: false
  })
  data!: OrdersCreateManyCustomersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
