import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateManyProductsInput } from "../inputs/OrdersCreateManyProductsInput";

@TypeGraphQL.InputType("OrdersCreateManyProductsInputEnvelope", {
  isAbstract: true
})
export class OrdersCreateManyProductsInputEnvelope {
  @TypeGraphQL.Field(_type => [OrdersCreateManyProductsInput], {
    nullable: false
  })
  data!: OrdersCreateManyProductsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
