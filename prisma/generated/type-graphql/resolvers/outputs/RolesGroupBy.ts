import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolesAvgAggregate } from "../outputs/RolesAvgAggregate";
import { RolesCountAggregate } from "../outputs/RolesCountAggregate";
import { RolesMaxAggregate } from "../outputs/RolesMaxAggregate";
import { RolesMinAggregate } from "../outputs/RolesMinAggregate";
import { RolesSumAggregate } from "../outputs/RolesSumAggregate";

@TypeGraphQL.ObjectType("RolesGroupBy", {
  isAbstract: true
})
export class RolesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  role_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => RolesCountAggregate, {
    nullable: true
  })
  _count!: RolesCountAggregate | null;

  @TypeGraphQL.Field(_type => RolesAvgAggregate, {
    nullable: true
  })
  _avg!: RolesAvgAggregate | null;

  @TypeGraphQL.Field(_type => RolesSumAggregate, {
    nullable: true
  })
  _sum!: RolesSumAggregate | null;

  @TypeGraphQL.Field(_type => RolesMinAggregate, {
    nullable: true
  })
  _min!: RolesMinAggregate | null;

  @TypeGraphQL.Field(_type => RolesMaxAggregate, {
    nullable: true
  })
  _max!: RolesMaxAggregate | null;
}
