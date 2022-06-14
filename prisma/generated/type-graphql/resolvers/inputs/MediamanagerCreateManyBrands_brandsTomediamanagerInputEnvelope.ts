import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateManyBrands_brandsTomediamanagerInput } from "../inputs/MediamanagerCreateManyBrands_brandsTomediamanagerInput";

@TypeGraphQL.InputType("MediamanagerCreateManyBrands_brandsTomediamanagerInputEnvelope", {
  isAbstract: true
})
export class MediamanagerCreateManyBrands_brandsTomediamanagerInputEnvelope {
  @TypeGraphQL.Field(_type => [MediamanagerCreateManyBrands_brandsTomediamanagerInput], {
    nullable: false
  })
  data!: MediamanagerCreateManyBrands_brandsTomediamanagerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
