import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Occassions } from "../models/Occassions";
import { WishlistsCount } from "../resolvers/outputs/WishlistsCount";

@TypeGraphQL.ObjectType("Wishlists", {
  isAbstract: true
})
export class Wishlists {
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
  customers?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  visibility?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  products?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  quantity?: string | null;

  occassions?: Occassions[];

  @TypeGraphQL.Field(_type => WishlistsCount, {
    nullable: true
  })
  _count?: WishlistsCount | null;
}
