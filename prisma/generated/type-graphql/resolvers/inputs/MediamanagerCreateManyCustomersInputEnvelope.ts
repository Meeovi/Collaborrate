import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateManyCustomersInput } from "../inputs/MediamanagerCreateManyCustomersInput";

@TypeGraphQL.InputType("MediamanagerCreateManyCustomersInputEnvelope", {
  isAbstract: true
})
export class MediamanagerCreateManyCustomersInputEnvelope {
  @TypeGraphQL.Field(_type => [MediamanagerCreateManyCustomersInput], {
    nullable: false
  })
  data!: MediamanagerCreateManyCustomersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
