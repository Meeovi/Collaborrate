import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Product_attribute_setScalarWhereInput", {
  isAbstract: true
})
export class Product_attribute_setScalarWhereInput {
  @TypeGraphQL.Field(_type => [Product_attribute_setScalarWhereInput], {
    nullable: true
  })
  AND?: Product_attribute_setScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_attribute_setScalarWhereInput], {
    nullable: true
  })
  OR?: Product_attribute_setScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_attribute_setScalarWhereInput], {
    nullable: true
  })
  NOT?: Product_attribute_setScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  based_on?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  attribute_id?: IntFilter | undefined;
}
