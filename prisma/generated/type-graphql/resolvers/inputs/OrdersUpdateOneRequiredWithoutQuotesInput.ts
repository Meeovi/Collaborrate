import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersCreateOrConnectWithoutQuotesInput } from "../inputs/OrdersCreateOrConnectWithoutQuotesInput";
import { OrdersCreateWithoutQuotesInput } from "../inputs/OrdersCreateWithoutQuotesInput";
import { OrdersUpdateWithoutQuotesInput } from "../inputs/OrdersUpdateWithoutQuotesInput";
import { OrdersUpsertWithoutQuotesInput } from "../inputs/OrdersUpsertWithoutQuotesInput";
import { OrdersWhereUniqueInput } from "../inputs/OrdersWhereUniqueInput";

@TypeGraphQL.InputType("OrdersUpdateOneRequiredWithoutQuotesInput", {
  isAbstract: true
})
export class OrdersUpdateOneRequiredWithoutQuotesInput {
  @TypeGraphQL.Field(_type => OrdersCreateWithoutQuotesInput, {
    nullable: true
  })
  create?: OrdersCreateWithoutQuotesInput | undefined;

  @TypeGraphQL.Field(_type => OrdersCreateOrConnectWithoutQuotesInput, {
    nullable: true
  })
  connectOrCreate?: OrdersCreateOrConnectWithoutQuotesInput | undefined;

  @TypeGraphQL.Field(_type => OrdersUpsertWithoutQuotesInput, {
    nullable: true
  })
  upsert?: OrdersUpsertWithoutQuotesInput | undefined;

  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: true
  })
  connect?: OrdersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => OrdersUpdateWithoutQuotesInput, {
    nullable: true
  })
  update?: OrdersUpdateWithoutQuotesInput | undefined;
}
