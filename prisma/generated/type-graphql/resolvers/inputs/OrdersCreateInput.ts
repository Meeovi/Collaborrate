import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateNestedOneWithoutOrdersInput } from "../inputs/CustomersCreateNestedOneWithoutOrdersInput";
import { ProductsCreateNestedOneWithoutOrdersInput } from "../inputs/ProductsCreateNestedOneWithoutOrdersInput";
import { QuotesCreateNestedManyWithoutOrdersInput } from "../inputs/QuotesCreateNestedManyWithoutOrdersInput";
import { TransactionsCreateNestedManyWithoutOrdersInput } from "../inputs/TransactionsCreateNestedManyWithoutOrdersInput";

@TypeGraphQL.InputType("OrdersCreateInput", {
  isAbstract: true
})
export class OrdersCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  purchase_point?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  purchase_date?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bill_to_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ship_to_name?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  grand_total_base?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  grand_total_purchased?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  status?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  action?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  allocated_sources?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  braintree_transaction_source?: string | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutOrdersInput, {
    nullable: true
  })
  customers?: CustomersCreateNestedOneWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutOrdersInput, {
    nullable: true
  })
  products?: ProductsCreateNestedOneWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => QuotesCreateNestedManyWithoutOrdersInput, {
    nullable: true
  })
  quotes?: QuotesCreateNestedManyWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => TransactionsCreateNestedManyWithoutOrdersInput, {
    nullable: true
  })
  transactions?: TransactionsCreateNestedManyWithoutOrdersInput | undefined;
}
