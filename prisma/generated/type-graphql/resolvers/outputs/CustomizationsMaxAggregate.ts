import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CustomizationsMaxAggregate", {
  isAbstract: true
})
export class CustomizationsMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

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
}
