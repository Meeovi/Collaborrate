import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Pdf_templatesAvgAggregate } from "../outputs/Pdf_templatesAvgAggregate";
import { Pdf_templatesCountAggregate } from "../outputs/Pdf_templatesCountAggregate";
import { Pdf_templatesMaxAggregate } from "../outputs/Pdf_templatesMaxAggregate";
import { Pdf_templatesMinAggregate } from "../outputs/Pdf_templatesMinAggregate";
import { Pdf_templatesSumAggregate } from "../outputs/Pdf_templatesSumAggregate";

@TypeGraphQL.ObjectType("Pdf_templatesGroupBy", {
  isAbstract: true
})
export class Pdf_templatesGroupBy {
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
  page_size!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orientation!: string | null;

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
  margin_left!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_right!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_top!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_bottom!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_header!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_footer!: string | null;

  @TypeGraphQL.Field(_type => Pdf_templatesCountAggregate, {
    nullable: true
  })
  _count!: Pdf_templatesCountAggregate | null;

  @TypeGraphQL.Field(_type => Pdf_templatesAvgAggregate, {
    nullable: true
  })
  _avg!: Pdf_templatesAvgAggregate | null;

  @TypeGraphQL.Field(_type => Pdf_templatesSumAggregate, {
    nullable: true
  })
  _sum!: Pdf_templatesSumAggregate | null;

  @TypeGraphQL.Field(_type => Pdf_templatesMinAggregate, {
    nullable: true
  })
  _min!: Pdf_templatesMinAggregate | null;

  @TypeGraphQL.Field(_type => Pdf_templatesMaxAggregate, {
    nullable: true
  })
  _max!: Pdf_templatesMaxAggregate | null;
}
