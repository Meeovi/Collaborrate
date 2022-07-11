import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Mediamanager } from "../models/Mediamanager";
import { AgreementsCount } from "../resolvers/outputs/AgreementsCount";

@TypeGraphQL.ObjectType("Agreements", {
  isAbstract: true
})
export class Agreements {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  reference_id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  excerpt?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  user_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  shop_id!: number;

  mediamanager?: Mediamanager[];

  @TypeGraphQL.Field(_type => AgreementsCount, {
    nullable: true
  })
  _count?: AgreementsCount | null;
}
