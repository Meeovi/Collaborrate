import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Email_templatesAvgAggregate } from "../outputs/Email_templatesAvgAggregate";
import { Email_templatesCountAggregate } from "../outputs/Email_templatesCountAggregate";
import { Email_templatesMaxAggregate } from "../outputs/Email_templatesMaxAggregate";
import { Email_templatesMinAggregate } from "../outputs/Email_templatesMinAggregate";
import { Email_templatesSumAggregate } from "../outputs/Email_templatesSumAggregate";

@TypeGraphQL.ObjectType("Email_templatesGroupBy", {
  isAbstract: true
})
export class Email_templatesGroupBy {
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
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assigned_to!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  active!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  insert_variable!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subject!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  header!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  footer!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  width!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  height!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media!: string | null;

  @TypeGraphQL.Field(_type => Email_templatesCountAggregate, {
    nullable: true
  })
  _count!: Email_templatesCountAggregate | null;

  @TypeGraphQL.Field(_type => Email_templatesAvgAggregate, {
    nullable: true
  })
  _avg!: Email_templatesAvgAggregate | null;

  @TypeGraphQL.Field(_type => Email_templatesSumAggregate, {
    nullable: true
  })
  _sum!: Email_templatesSumAggregate | null;

  @TypeGraphQL.Field(_type => Email_templatesMinAggregate, {
    nullable: true
  })
  _min!: Email_templatesMinAggregate | null;

  @TypeGraphQL.Field(_type => Email_templatesMaxAggregate, {
    nullable: true
  })
  _max!: Email_templatesMaxAggregate | null;
}
