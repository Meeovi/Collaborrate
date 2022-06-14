import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateNestedOneWithoutCredit_memosInput } from "../inputs/CustomersCreateNestedOneWithoutCredit_memosInput";
import { ProductsCreateNestedOneWithoutCredit_memosInput } from "../inputs/ProductsCreateNestedOneWithoutCredit_memosInput";

@TypeGraphQL.InputType("Credit_memosCreateInput", {
  isAbstract: true
})
export class Credit_memosCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  credit_memo!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  order_number?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bill_to_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  refunded?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  action?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  id?: bigint | undefined;

  @TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutCredit_memosInput, {
    nullable: true
  })
  customers?: CustomersCreateNestedOneWithoutCredit_memosInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutCredit_memosInput, {
    nullable: true
  })
  products?: ProductsCreateNestedOneWithoutCredit_memosInput | undefined;
}
