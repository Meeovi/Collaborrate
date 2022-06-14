import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateManyUsersInput } from "../inputs/MediamanagerCreateManyUsersInput";

@TypeGraphQL.InputType("MediamanagerCreateManyUsersInputEnvelope", {
  isAbstract: true
})
export class MediamanagerCreateManyUsersInputEnvelope {
  @TypeGraphQL.Field(_type => [MediamanagerCreateManyUsersInput], {
    nullable: false
  })
  data!: MediamanagerCreateManyUsersInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
