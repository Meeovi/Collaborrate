import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateManyTasksInputEnvelope } from "../inputs/MediamanagerCreateManyTasksInputEnvelope";
import { MediamanagerCreateOrConnectWithoutTasksInput } from "../inputs/MediamanagerCreateOrConnectWithoutTasksInput";
import { MediamanagerCreateWithoutTasksInput } from "../inputs/MediamanagerCreateWithoutTasksInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerCreateNestedManyWithoutTasksInput", {
  isAbstract: true
})
export class MediamanagerCreateNestedManyWithoutTasksInput {
  @TypeGraphQL.Field(_type => [MediamanagerCreateWithoutTasksInput], {
    nullable: true
  })
  create?: MediamanagerCreateWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerCreateOrConnectWithoutTasksInput], {
    nullable: true
  })
  connectOrCreate?: MediamanagerCreateOrConnectWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => MediamanagerCreateManyTasksInputEnvelope, {
    nullable: true
  })
  createMany?: MediamanagerCreateManyTasksInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerWhereUniqueInput], {
    nullable: true
  })
  connect?: MediamanagerWhereUniqueInput[] | undefined;
}
