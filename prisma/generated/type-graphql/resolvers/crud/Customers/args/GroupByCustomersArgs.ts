import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomersOrderByWithAggregationInput } from "../../../inputs/CustomersOrderByWithAggregationInput";
import { CustomersScalarWhereWithAggregatesInput } from "../../../inputs/CustomersScalarWhereWithAggregatesInput";
import { CustomersWhereInput } from "../../../inputs/CustomersWhereInput";
import { CustomersScalarFieldEnum } from "../../../../enums/CustomersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCustomersArgs {
  @TypeGraphQL.Field(_type => CustomersWhereInput, {
    nullable: true
  })
  where?: CustomersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustomersOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CustomersOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "thumbnail" | "name_prefix" | "first_name" | "middle_name" | "last_name" | "email" | "customer_group" | "phone" | "zipcode" | "name_suffix" | "websites" | "product" | "country" | "state" | "customer_since" | "confirmed_email" | "date_of_birth" | "tax_vat_number" | "gender" | "description" | "short_description" | "image" | "Address" | "address_two" | "payment_type" | "username" | "password">;

  @TypeGraphQL.Field(_type => CustomersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CustomersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
