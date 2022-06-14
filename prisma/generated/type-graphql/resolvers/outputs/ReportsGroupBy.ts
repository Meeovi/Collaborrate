import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportsAvgAggregate } from "../outputs/ReportsAvgAggregate";
import { ReportsCountAggregate } from "../outputs/ReportsCountAggregate";
import { ReportsMaxAggregate } from "../outputs/ReportsMaxAggregate";
import { ReportsMinAggregate } from "../outputs/ReportsMinAggregate";
import { ReportsSumAggregate } from "../outputs/ReportsSumAggregate";

@TypeGraphQL.ObjectType("ReportsGroupBy", {
  isAbstract: true
})
export class ReportsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  products!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  quantity!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subtotal!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  applied_coupon!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ip_address!: string | null;

  @TypeGraphQL.Field(_type => ReportsCountAggregate, {
    nullable: true
  })
  _count!: ReportsCountAggregate | null;

  @TypeGraphQL.Field(_type => ReportsAvgAggregate, {
    nullable: true
  })
  _avg!: ReportsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ReportsSumAggregate, {
    nullable: true
  })
  _sum!: ReportsSumAggregate | null;

  @TypeGraphQL.Field(_type => ReportsMinAggregate, {
    nullable: true
  })
  _min!: ReportsMinAggregate | null;

  @TypeGraphQL.Field(_type => ReportsMaxAggregate, {
    nullable: true
  })
  _max!: ReportsMaxAggregate | null;
}
