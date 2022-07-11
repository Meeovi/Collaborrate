import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Upload_fileAvgAggregate } from "../outputs/Upload_fileAvgAggregate";
import { Upload_fileCountAggregate } from "../outputs/Upload_fileCountAggregate";
import { Upload_fileMaxAggregate } from "../outputs/Upload_fileMaxAggregate";
import { Upload_fileMinAggregate } from "../outputs/Upload_fileMinAggregate";
import { Upload_fileSumAggregate } from "../outputs/Upload_fileSumAggregate";

@TypeGraphQL.ObjectType("Upload_fileGroupBy", {
  isAbstract: true
})
export class Upload_fileGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  alternativeText!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  caption!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  width!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  height!: number | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  formats!: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  hash!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ext!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  mime!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  size!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  previewUrl!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  provider!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  provider_metadata!: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  created_by!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  updated_by!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at!: Date | null;

  @TypeGraphQL.Field(_type => Upload_fileCountAggregate, {
    nullable: true
  })
  _count!: Upload_fileCountAggregate | null;

  @TypeGraphQL.Field(_type => Upload_fileAvgAggregate, {
    nullable: true
  })
  _avg!: Upload_fileAvgAggregate | null;

  @TypeGraphQL.Field(_type => Upload_fileSumAggregate, {
    nullable: true
  })
  _sum!: Upload_fileSumAggregate | null;

  @TypeGraphQL.Field(_type => Upload_fileMinAggregate, {
    nullable: true
  })
  _min!: Upload_fileMinAggregate | null;

  @TypeGraphQL.Field(_type => Upload_fileMaxAggregate, {
    nullable: true
  })
  _max!: Upload_fileMaxAggregate | null;
}
