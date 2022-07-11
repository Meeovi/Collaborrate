import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Reports", {
  isAbstract: true
})
export class Reports {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  products?: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  quantity?: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subtotal?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  applied_coupon?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ip_address?: string | null;
}
