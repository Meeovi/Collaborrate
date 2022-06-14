import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateManyCommentsInput } from "../inputs/MediamanagerCreateManyCommentsInput";

@TypeGraphQL.InputType("MediamanagerCreateManyCommentsInputEnvelope", {
  isAbstract: true
})
export class MediamanagerCreateManyCommentsInputEnvelope {
  @TypeGraphQL.Field(_type => [MediamanagerCreateManyCommentsInput], {
    nullable: false
  })
  data!: MediamanagerCreateManyCommentsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
