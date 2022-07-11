import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerScalarWhereInput } from "../inputs/MediamanagerScalarWhereInput";
import { MediamanagerUpdateManyMutationInput } from "../inputs/MediamanagerUpdateManyMutationInput";

@TypeGraphQL.InputType("MediamanagerUpdateManyWithWhereWithoutCommentsInput", {
  isAbstract: true
})
export class MediamanagerUpdateManyWithWhereWithoutCommentsInput {
  @TypeGraphQL.Field(_type => MediamanagerScalarWhereInput, {
    nullable: false
  })
  where!: MediamanagerScalarWhereInput;

  @TypeGraphQL.Field(_type => MediamanagerUpdateManyMutationInput, {
    nullable: false
  })
  data!: MediamanagerUpdateManyMutationInput;
}
