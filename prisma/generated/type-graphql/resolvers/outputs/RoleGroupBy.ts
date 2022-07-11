import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCountAggregate } from "../outputs/RoleCountAggregate";
import { RoleMaxAggregate } from "../outputs/RoleMaxAggregate";
import { RoleMinAggregate } from "../outputs/RoleMinAggregate";

@TypeGraphQL.ObjectType("RoleGroupBy", {
  isAbstract: true
})
export class RoleGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  objectId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  rperm!: string[] | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  wperm!: string[] | null;

  @TypeGraphQL.Field(_type => RoleCountAggregate, {
    nullable: true
  })
  _count!: RoleCountAggregate | null;

  @TypeGraphQL.Field(_type => RoleMinAggregate, {
    nullable: true
  })
  _min!: RoleMinAggregate | null;

  @TypeGraphQL.Field(_type => RoleMaxAggregate, {
    nullable: true
  })
  _max!: RoleMaxAggregate | null;
}
