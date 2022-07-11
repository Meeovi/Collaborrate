import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateManyCommentsInputEnvelope } from "../inputs/MediamanagerCreateManyCommentsInputEnvelope";
import { MediamanagerCreateOrConnectWithoutCommentsInput } from "../inputs/MediamanagerCreateOrConnectWithoutCommentsInput";
import { MediamanagerCreateWithoutCommentsInput } from "../inputs/MediamanagerCreateWithoutCommentsInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerCreateNestedManyWithoutCommentsInput", {
  isAbstract: true
})
export class MediamanagerCreateNestedManyWithoutCommentsInput {
  @TypeGraphQL.Field(_type => [MediamanagerCreateWithoutCommentsInput], {
    nullable: true
  })
  create?: MediamanagerCreateWithoutCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerCreateOrConnectWithoutCommentsInput], {
    nullable: true
  })
  connectOrCreate?: MediamanagerCreateOrConnectWithoutCommentsInput[] | undefined;

  @TypeGraphQL.Field(_type => MediamanagerCreateManyCommentsInputEnvelope, {
    nullable: true
  })
  createMany?: MediamanagerCreateManyCommentsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerWhereUniqueInput], {
    nullable: true
  })
  connect?: MediamanagerWhereUniqueInput[] | undefined;
}
