import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Gift_certificatesAvgAggregate } from "../outputs/Gift_certificatesAvgAggregate";
import { Gift_certificatesCountAggregate } from "../outputs/Gift_certificatesCountAggregate";
import { Gift_certificatesMaxAggregate } from "../outputs/Gift_certificatesMaxAggregate";
import { Gift_certificatesMinAggregate } from "../outputs/Gift_certificatesMinAggregate";
import { Gift_certificatesSumAggregate } from "../outputs/Gift_certificatesSumAggregate";

@TypeGraphQL.ObjectType("AggregateGift_certificates", {
  isAbstract: true
})
export class AggregateGift_certificates {
  @TypeGraphQL.Field(_type => Gift_certificatesCountAggregate, {
    nullable: true
  })
  _count!: Gift_certificatesCountAggregate | null;

  @TypeGraphQL.Field(_type => Gift_certificatesAvgAggregate, {
    nullable: true
  })
  _avg!: Gift_certificatesAvgAggregate | null;

  @TypeGraphQL.Field(_type => Gift_certificatesSumAggregate, {
    nullable: true
  })
  _sum!: Gift_certificatesSumAggregate | null;

  @TypeGraphQL.Field(_type => Gift_certificatesMinAggregate, {
    nullable: true
  })
  _min!: Gift_certificatesMinAggregate | null;

  @TypeGraphQL.Field(_type => Gift_certificatesMaxAggregate, {
    nullable: true
  })
  _max!: Gift_certificatesMaxAggregate | null;
}
