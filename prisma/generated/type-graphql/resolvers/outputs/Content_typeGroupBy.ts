import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Content_typeAvgAggregate } from "../outputs/Content_typeAvgAggregate";
import { Content_typeCountAggregate } from "../outputs/Content_typeCountAggregate";
import { Content_typeMaxAggregate } from "../outputs/Content_typeMaxAggregate";
import { Content_typeMinAggregate } from "../outputs/Content_typeMinAggregate";
import { Content_typeSumAggregate } from "../outputs/Content_typeSumAggregate";

@TypeGraphQL.ObjectType("Content_typeGroupBy", {
  isAbstract: true
})
export class Content_typeGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  text!: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  number!: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  json!: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  uid!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  time!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  timestamp!: Date | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  boolean!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rich_text!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  database_name!: string | null;

  @TypeGraphQL.Field(_type => Content_typeCountAggregate, {
    nullable: true
  })
  _count!: Content_typeCountAggregate | null;

  @TypeGraphQL.Field(_type => Content_typeAvgAggregate, {
    nullable: true
  })
  _avg!: Content_typeAvgAggregate | null;

  @TypeGraphQL.Field(_type => Content_typeSumAggregate, {
    nullable: true
  })
  _sum!: Content_typeSumAggregate | null;

  @TypeGraphQL.Field(_type => Content_typeMinAggregate, {
    nullable: true
  })
  _min!: Content_typeMinAggregate | null;

  @TypeGraphQL.Field(_type => Content_typeMaxAggregate, {
    nullable: true
  })
  _max!: Content_typeMaxAggregate | null;
}
