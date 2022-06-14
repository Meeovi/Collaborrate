import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_paymentCreateManyInput } from "../../../inputs/Customer_paymentCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCustomer_paymentArgs {
  @TypeGraphQL.Field(_type => [Customer_paymentCreateManyInput], {
    nullable: false
  })
  data!: Customer_paymentCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
