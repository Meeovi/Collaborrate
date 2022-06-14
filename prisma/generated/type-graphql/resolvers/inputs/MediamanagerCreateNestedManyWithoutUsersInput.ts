import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateManyUsersInputEnvelope } from "../inputs/MediamanagerCreateManyUsersInputEnvelope";
import { MediamanagerCreateOrConnectWithoutUsersInput } from "../inputs/MediamanagerCreateOrConnectWithoutUsersInput";
import { MediamanagerCreateWithoutUsersInput } from "../inputs/MediamanagerCreateWithoutUsersInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerCreateNestedManyWithoutUsersInput", {
  isAbstract: true
})
export class MediamanagerCreateNestedManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [MediamanagerCreateWithoutUsersInput], {
    nullable: true
  })
  create?: MediamanagerCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: MediamanagerCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => MediamanagerCreateManyUsersInputEnvelope, {
    nullable: true
  })
  createMany?: MediamanagerCreateManyUsersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerWhereUniqueInput], {
    nullable: true
  })
  connect?: MediamanagerWhereUniqueInput[] | undefined;
}
