import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Tax_rateCreateWithoutProductsInput", {
  isAbstract: true
})
export class Tax_rateCreateWithoutProductsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tax_identifier!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  zip_post_is_range?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postcode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  state?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rate_percent?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_store_view?: string | undefined;
}
