import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersAvgAggregate } from "../outputs/CustomersAvgAggregate";
import { CustomersCountAggregate } from "../outputs/CustomersCountAggregate";
import { CustomersMaxAggregate } from "../outputs/CustomersMaxAggregate";
import { CustomersMinAggregate } from "../outputs/CustomersMinAggregate";
import { CustomersSumAggregate } from "../outputs/CustomersSumAggregate";

@TypeGraphQL.ObjectType("CustomersGroupBy", {
  isAbstract: true
})
export class CustomersGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  thumbnail!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name_prefix!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  middle_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_group!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  zipcode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name_suffix!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  websites!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  customer_since!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  confirmed_email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  date_of_birth!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tax_vat_number!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  gender!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  short_description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Address!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address_two!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payment_type!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password!: string | null;

  @TypeGraphQL.Field(_type => CustomersCountAggregate, {
    nullable: true
  })
  _count!: CustomersCountAggregate | null;

  @TypeGraphQL.Field(_type => CustomersAvgAggregate, {
    nullable: true
  })
  _avg!: CustomersAvgAggregate | null;

  @TypeGraphQL.Field(_type => CustomersSumAggregate, {
    nullable: true
  })
  _sum!: CustomersSumAggregate | null;

  @TypeGraphQL.Field(_type => CustomersMinAggregate, {
    nullable: true
  })
  _min!: CustomersMinAggregate | null;

  @TypeGraphQL.Field(_type => CustomersMaxAggregate, {
    nullable: true
  })
  _max!: CustomersMaxAggregate | null;
}
