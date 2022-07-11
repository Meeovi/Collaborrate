import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Credit_memosCreateManyCustomersInput", {
  isAbstract: true
})
export class Credit_memosCreateManyCustomersInput {
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

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  prod_id?: bigint | undefined;
}
