import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("MediamanagerCreateManyAgreements_agreementsTomediamanagerInput", {
  isAbstract: true
})
export class MediamanagerCreateManyAgreements_agreementsTomediamanagerInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  keywords?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tags?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  brands?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  expiration_date?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  copyright?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dimensions?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  author?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content_type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  versions?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  watermark_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  watermark_description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  watermark_media?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  albums?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  comment?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  workspace?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  task_name?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  task_description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  task_type?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  members?: number | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  products?: bigint | undefined;
}
