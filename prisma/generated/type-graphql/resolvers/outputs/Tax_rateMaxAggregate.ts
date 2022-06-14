import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("Tax_rateMaxAggregate", {
  isAbstract: true
})
export class Tax_rateMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tax_identifier!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  zip_post_is_range!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postcode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rate_percent!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_store_view!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  prod_id!: bigint | null;
}
