import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ReportsCreateInput", {
  isAbstract: true
})
export class ReportsCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  products?: string | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  quantity?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subtotal?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  applied_coupon?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ip_address?: string | undefined;
}
