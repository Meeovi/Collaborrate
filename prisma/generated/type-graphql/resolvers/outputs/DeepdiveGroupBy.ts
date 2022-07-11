import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeepdiveAvgAggregate } from "../outputs/DeepdiveAvgAggregate";
import { DeepdiveCountAggregate } from "../outputs/DeepdiveCountAggregate";
import { DeepdiveMaxAggregate } from "../outputs/DeepdiveMaxAggregate";
import { DeepdiveMinAggregate } from "../outputs/DeepdiveMinAggregate";
import { DeepdiveSumAggregate } from "../outputs/DeepdiveSumAggregate";

@TypeGraphQL.ObjectType("DeepdiveGroupBy", {
  isAbstract: true
})
export class DeepdiveGroupBy {
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
  end_date!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  attendees!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  login!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  start_date!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  whid!: string | null;

  @TypeGraphQL.Field(_type => DeepdiveCountAggregate, {
    nullable: true
  })
  _count!: DeepdiveCountAggregate | null;

  @TypeGraphQL.Field(_type => DeepdiveAvgAggregate, {
    nullable: true
  })
  _avg!: DeepdiveAvgAggregate | null;

  @TypeGraphQL.Field(_type => DeepdiveSumAggregate, {
    nullable: true
  })
  _sum!: DeepdiveSumAggregate | null;

  @TypeGraphQL.Field(_type => DeepdiveMinAggregate, {
    nullable: true
  })
  _min!: DeepdiveMinAggregate | null;

  @TypeGraphQL.Field(_type => DeepdiveMaxAggregate, {
    nullable: true
  })
  _max!: DeepdiveMaxAggregate | null;
}
