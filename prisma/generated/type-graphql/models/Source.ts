import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Source", {
  isAbstract: true
})
export class Source {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  code!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  enabled?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  latitude?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  longitude?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  pickup_location?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contact_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  phone?: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  fax?: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  street?: string | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  postcode?: Prisma.Decimal | null;
}
