import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmailsAvgAggregate } from "../outputs/EmailsAvgAggregate";
import { EmailsCountAggregate } from "../outputs/EmailsCountAggregate";
import { EmailsMaxAggregate } from "../outputs/EmailsMaxAggregate";
import { EmailsMinAggregate } from "../outputs/EmailsMinAggregate";
import { EmailsSumAggregate } from "../outputs/EmailsSumAggregate";

@TypeGraphQL.ObjectType("EmailsGroupBy", {
  isAbstract: true
})
export class EmailsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subject!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cust_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bcc!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cc!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  from!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  media!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  staff_id!: number | null;

  @TypeGraphQL.Field(_type => EmailsCountAggregate, {
    nullable: true
  })
  _count!: EmailsCountAggregate | null;

  @TypeGraphQL.Field(_type => EmailsAvgAggregate, {
    nullable: true
  })
  _avg!: EmailsAvgAggregate | null;

  @TypeGraphQL.Field(_type => EmailsSumAggregate, {
    nullable: true
  })
  _sum!: EmailsSumAggregate | null;

  @TypeGraphQL.Field(_type => EmailsMinAggregate, {
    nullable: true
  })
  _min!: EmailsMinAggregate | null;

  @TypeGraphQL.Field(_type => EmailsMaxAggregate, {
    nullable: true
  })
  _max!: EmailsMaxAggregate | null;
}
