import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_paymentWhereInput } from "../inputs/Customer_paymentWhereInput";

@TypeGraphQL.InputType("Customer_paymentRelationFilter", {
  isAbstract: true
})
export class Customer_paymentRelationFilter {
  @TypeGraphQL.Field(_type => Customer_paymentWhereInput, {
    nullable: true
  })
  is?: Customer_paymentWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_paymentWhereInput, {
    nullable: true
  })
  isNot?: Customer_paymentWhereInput | undefined;
}
