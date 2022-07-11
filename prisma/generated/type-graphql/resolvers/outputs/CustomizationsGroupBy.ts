import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomizationsAvgAggregate } from "../outputs/CustomizationsAvgAggregate";
import { CustomizationsCountAggregate } from "../outputs/CustomizationsCountAggregate";
import { CustomizationsMaxAggregate } from "../outputs/CustomizationsMaxAggregate";
import { CustomizationsMinAggregate } from "../outputs/CustomizationsMinAggregate";
import { CustomizationsSumAggregate } from "../outputs/CustomizationsSumAggregate";

@TypeGraphQL.ObjectType("CustomizationsGroupBy", {
  isAbstract: true
})
export class CustomizationsGroupBy {
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
  site_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nav_link!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notification!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  banner!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  footer_link!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  announcement!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  site_url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  allow_signup!: string | null;

  @TypeGraphQL.Field(_type => CustomizationsCountAggregate, {
    nullable: true
  })
  _count!: CustomizationsCountAggregate | null;

  @TypeGraphQL.Field(_type => CustomizationsAvgAggregate, {
    nullable: true
  })
  _avg!: CustomizationsAvgAggregate | null;

  @TypeGraphQL.Field(_type => CustomizationsSumAggregate, {
    nullable: true
  })
  _sum!: CustomizationsSumAggregate | null;

  @TypeGraphQL.Field(_type => CustomizationsMinAggregate, {
    nullable: true
  })
  _min!: CustomizationsMinAggregate | null;

  @TypeGraphQL.Field(_type => CustomizationsMaxAggregate, {
    nullable: true
  })
  _max!: CustomizationsMaxAggregate | null;
}
