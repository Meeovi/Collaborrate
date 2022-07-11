import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Gift_certificatesAvgAggregate } from "../outputs/Gift_certificatesAvgAggregate";
import { Gift_certificatesCountAggregate } from "../outputs/Gift_certificatesCountAggregate";
import { Gift_certificatesMaxAggregate } from "../outputs/Gift_certificatesMaxAggregate";
import { Gift_certificatesMinAggregate } from "../outputs/Gift_certificatesMinAggregate";
import { Gift_certificatesSumAggregate } from "../outputs/Gift_certificatesSumAggregate";

@TypeGraphQL.ObjectType("Gift_certificatesGroupBy", {
  isAbstract: true
})
export class Gift_certificatesGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  excerpt!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  discount!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  published!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  special_offers!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rewards!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  coupons!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  expiration!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  categories!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  articles!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  products!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customers!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  users!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type!: string | null;

  @TypeGraphQL.Field(_type => Gift_certificatesCountAggregate, {
    nullable: true
  })
  _count!: Gift_certificatesCountAggregate | null;

  @TypeGraphQL.Field(_type => Gift_certificatesAvgAggregate, {
    nullable: true
  })
  _avg!: Gift_certificatesAvgAggregate | null;

  @TypeGraphQL.Field(_type => Gift_certificatesSumAggregate, {
    nullable: true
  })
  _sum!: Gift_certificatesSumAggregate | null;

  @TypeGraphQL.Field(_type => Gift_certificatesMinAggregate, {
    nullable: true
  })
  _min!: Gift_certificatesMinAggregate | null;

  @TypeGraphQL.Field(_type => Gift_certificatesMaxAggregate, {
    nullable: true
  })
  _max!: Gift_certificatesMaxAggregate | null;
}
