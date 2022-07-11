import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersAvgAggregate } from "../outputs/UsersAvgAggregate";
import { UsersCountAggregate } from "../outputs/UsersCountAggregate";
import { UsersMaxAggregate } from "../outputs/UsersMaxAggregate";
import { UsersMinAggregate } from "../outputs/UsersMinAggregate";
import { UsersSumAggregate } from "../outputs/UsersSumAggregate";

@TypeGraphQL.ObjectType("UsersGroupBy", {
  isAbstract: true
})
export class UsersGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  last_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  interface_locale!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  value!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  permissions!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => UsersCountAggregate, {
    nullable: true
  })
  _count!: UsersCountAggregate | null;

  @TypeGraphQL.Field(_type => UsersAvgAggregate, {
    nullable: true
  })
  _avg!: UsersAvgAggregate | null;

  @TypeGraphQL.Field(_type => UsersSumAggregate, {
    nullable: true
  })
  _sum!: UsersSumAggregate | null;

  @TypeGraphQL.Field(_type => UsersMinAggregate, {
    nullable: true
  })
  _min!: UsersMinAggregate | null;

  @TypeGraphQL.Field(_type => UsersMaxAggregate, {
    nullable: true
  })
  _max!: UsersMaxAggregate | null;
}
