import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContractsAvgAggregate } from "../outputs/ContractsAvgAggregate";
import { ContractsCountAggregate } from "../outputs/ContractsCountAggregate";
import { ContractsMaxAggregate } from "../outputs/ContractsMaxAggregate";
import { ContractsMinAggregate } from "../outputs/ContractsMinAggregate";
import { ContractsSumAggregate } from "../outputs/ContractsSumAggregate";

@TypeGraphQL.ObjectType("ContractsGroupBy", {
  isAbstract: true
})
export class ContractsGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contract_title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contract_value!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  start_date!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  end_date!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  renewal_reminder!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_signed_date!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  company_signed_date!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contract_manager!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  account!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contact!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  opportunity!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contract_type!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  currency!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  line_items!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  total!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  discount!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subtotal!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shipping_tax!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tax!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  grand_total!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => ContractsCountAggregate, {
    nullable: true
  })
  _count!: ContractsCountAggregate | null;

  @TypeGraphQL.Field(_type => ContractsAvgAggregate, {
    nullable: true
  })
  _avg!: ContractsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ContractsSumAggregate, {
    nullable: true
  })
  _sum!: ContractsSumAggregate | null;

  @TypeGraphQL.Field(_type => ContractsMinAggregate, {
    nullable: true
  })
  _min!: ContractsMinAggregate | null;

  @TypeGraphQL.Field(_type => ContractsMaxAggregate, {
    nullable: true
  })
  _max!: ContractsMaxAggregate | null;
}
