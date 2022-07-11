import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_subscribersAvgAggregate } from "../outputs/Newsletter_subscribersAvgAggregate";
import { Newsletter_subscribersCountAggregate } from "../outputs/Newsletter_subscribersCountAggregate";
import { Newsletter_subscribersMaxAggregate } from "../outputs/Newsletter_subscribersMaxAggregate";
import { Newsletter_subscribersMinAggregate } from "../outputs/Newsletter_subscribersMinAggregate";
import { Newsletter_subscribersSumAggregate } from "../outputs/Newsletter_subscribersSumAggregate";

@TypeGraphQL.ObjectType("Newsletter_subscribersGroupBy", {
  isAbstract: true
})
export class Newsletter_subscribersGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_first_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_last_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  websites!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cust_id!: number;

  @TypeGraphQL.Field(_type => Newsletter_subscribersCountAggregate, {
    nullable: true
  })
  _count!: Newsletter_subscribersCountAggregate | null;

  @TypeGraphQL.Field(_type => Newsletter_subscribersAvgAggregate, {
    nullable: true
  })
  _avg!: Newsletter_subscribersAvgAggregate | null;

  @TypeGraphQL.Field(_type => Newsletter_subscribersSumAggregate, {
    nullable: true
  })
  _sum!: Newsletter_subscribersSumAggregate | null;

  @TypeGraphQL.Field(_type => Newsletter_subscribersMinAggregate, {
    nullable: true
  })
  _min!: Newsletter_subscribersMinAggregate | null;

  @TypeGraphQL.Field(_type => Newsletter_subscribersMaxAggregate, {
    nullable: true
  })
  _max!: Newsletter_subscribersMaxAggregate | null;
}
