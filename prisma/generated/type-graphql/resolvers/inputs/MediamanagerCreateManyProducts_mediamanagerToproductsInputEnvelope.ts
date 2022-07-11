import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateManyProducts_mediamanagerToproductsInput } from "../inputs/MediamanagerCreateManyProducts_mediamanagerToproductsInput";

@TypeGraphQL.InputType("MediamanagerCreateManyProducts_mediamanagerToproductsInputEnvelope", {
  isAbstract: true
})
export class MediamanagerCreateManyProducts_mediamanagerToproductsInputEnvelope {
  @TypeGraphQL.Field(_type => [MediamanagerCreateManyProducts_mediamanagerToproductsInput], {
    nullable: false
  })
  data!: MediamanagerCreateManyProducts_mediamanagerToproductsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
