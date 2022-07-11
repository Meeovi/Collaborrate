import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersOrderByRelevanceFieldEnum } from "../../enums/CustomersOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CustomersOrderByRelevanceInput", {
  isAbstract: true
})
export class CustomersOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [CustomersOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"thumbnail" | "name_prefix" | "first_name" | "middle_name" | "last_name" | "email" | "customer_group" | "phone" | "zipcode" | "name_suffix" | "websites" | "product" | "country" | "state" | "confirmed_email" | "date_of_birth" | "tax_vat_number" | "gender" | "description" | "short_description" | "image" | "Address" | "address_two" | "payment_type" | "username" | "password">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
