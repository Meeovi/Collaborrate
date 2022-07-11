import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Upload_file_morphWhereInput", {
  isAbstract: true
})
export class Upload_file_morphWhereInput {
  @TypeGraphQL.Field(_type => [Upload_file_morphWhereInput], {
    nullable: true
  })
  AND?: Upload_file_morphWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Upload_file_morphWhereInput], {
    nullable: true
  })
  OR?: Upload_file_morphWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Upload_file_morphWhereInput], {
    nullable: true
  })
  NOT?: Upload_file_morphWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  upload_file_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  related_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  related_type?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  field?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  order?: IntNullableFilter | undefined;
}
