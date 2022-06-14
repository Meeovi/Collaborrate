import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateNestedOneWithoutRatingInput } from "../inputs/ProductsCreateNestedOneWithoutRatingInput";

@TypeGraphQL.InputType("RatingCreateInput", {
  isAbstract: true
})
export class RatingCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_value?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  default_store_view?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rating_visibility?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  sort_order?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutRatingInput, {
    nullable: true
  })
  products?: ProductsCreateNestedOneWithoutRatingInput | undefined;
}
