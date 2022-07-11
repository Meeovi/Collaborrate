import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Themes } from "../models/Themes";
import { WebsitesCount } from "../resolvers/outputs/WebsitesCount";

@TypeGraphQL.ObjectType("Websites", {
  isAbstract: true
})
export class Websites {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  id!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  shop?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store?: string | null;

  themes?: Themes[];

  @TypeGraphQL.Field(_type => WebsitesCount, {
    nullable: true
  })
  _count?: WebsitesCount | null;
}
