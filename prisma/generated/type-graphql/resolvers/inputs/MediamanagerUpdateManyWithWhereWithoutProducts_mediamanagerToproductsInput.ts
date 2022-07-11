import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerScalarWhereInput } from "../inputs/MediamanagerScalarWhereInput";
import { MediamanagerUpdateManyMutationInput } from "../inputs/MediamanagerUpdateManyMutationInput";

@TypeGraphQL.InputType("MediamanagerUpdateManyWithWhereWithoutProducts_mediamanagerToproductsInput", {
  isAbstract: true
})
export class MediamanagerUpdateManyWithWhereWithoutProducts_mediamanagerToproductsInput {
  @TypeGraphQL.Field(_type => MediamanagerScalarWhereInput, {
    nullable: false
  })
  where!: MediamanagerScalarWhereInput;

  @TypeGraphQL.Field(_type => MediamanagerUpdateManyMutationInput, {
    nullable: false
  })
  data!: MediamanagerUpdateManyMutationInput;
}
