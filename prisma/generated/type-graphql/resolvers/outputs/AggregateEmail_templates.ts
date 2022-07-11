import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Email_templatesAvgAggregate } from "../outputs/Email_templatesAvgAggregate";
import { Email_templatesCountAggregate } from "../outputs/Email_templatesCountAggregate";
import { Email_templatesMaxAggregate } from "../outputs/Email_templatesMaxAggregate";
import { Email_templatesMinAggregate } from "../outputs/Email_templatesMinAggregate";
import { Email_templatesSumAggregate } from "../outputs/Email_templatesSumAggregate";

@TypeGraphQL.ObjectType("AggregateEmail_templates", {
  isAbstract: true
})
export class AggregateEmail_templates {
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
