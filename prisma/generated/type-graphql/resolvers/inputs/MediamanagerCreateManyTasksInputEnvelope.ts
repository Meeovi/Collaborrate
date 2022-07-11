import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateManyTasksInput } from "../inputs/MediamanagerCreateManyTasksInput";

@TypeGraphQL.InputType("MediamanagerCreateManyTasksInputEnvelope", {
  isAbstract: true
})
export class MediamanagerCreateManyTasksInputEnvelope {
  @TypeGraphQL.Field(_type => [MediamanagerCreateManyTasksInput], {
    nullable: false
  })
  data!: MediamanagerCreateManyTasksInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
