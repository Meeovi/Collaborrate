import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvitationsAvgAggregate } from "../outputs/InvitationsAvgAggregate";
import { InvitationsCountAggregate } from "../outputs/InvitationsCountAggregate";
import { InvitationsMaxAggregate } from "../outputs/InvitationsMaxAggregate";
import { InvitationsMinAggregate } from "../outputs/InvitationsMinAggregate";
import { InvitationsSumAggregate } from "../outputs/InvitationsSumAggregate";

@TypeGraphQL.ObjectType("AggregateInvitations", {
  isAbstract: true
})
export class AggregateInvitations {
  @TypeGraphQL.Field(_type => InvitationsCountAggregate, {
    nullable: true
  })
  _count!: InvitationsCountAggregate | null;

  @TypeGraphQL.Field(_type => InvitationsAvgAggregate, {
    nullable: true
  })
  _avg!: InvitationsAvgAggregate | null;

  @TypeGraphQL.Field(_type => InvitationsSumAggregate, {
    nullable: true
  })
  _sum!: InvitationsSumAggregate | null;

  @TypeGraphQL.Field(_type => InvitationsMinAggregate, {
    nullable: true
  })
  _min!: InvitationsMinAggregate | null;

  @TypeGraphQL.Field(_type => InvitationsMaxAggregate, {
    nullable: true
  })
  _max!: InvitationsMaxAggregate | null;
}
