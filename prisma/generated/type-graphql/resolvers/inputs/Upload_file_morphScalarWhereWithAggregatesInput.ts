import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("Upload_file_morphScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class Upload_file_morphScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Upload_file_morphScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Upload_file_morphScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Upload_file_morphScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Upload_file_morphScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Upload_file_morphScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Upload_file_morphScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  upload_file_id?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  related_id?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  related_type?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  field?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  order?: IntNullableWithAggregatesFilter | undefined;
}
