import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Upload_file_morphCreateInput", {
  isAbstract: true
})
export class Upload_file_morphCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  upload_file_id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  related_id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  related_type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  field?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  order?: number | undefined;
}
