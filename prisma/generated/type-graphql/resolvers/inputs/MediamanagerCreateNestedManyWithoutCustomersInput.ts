import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediamanagerCreateManyCustomersInputEnvelope } from "../inputs/MediamanagerCreateManyCustomersInputEnvelope";
import { MediamanagerCreateOrConnectWithoutCustomersInput } from "../inputs/MediamanagerCreateOrConnectWithoutCustomersInput";
import { MediamanagerCreateWithoutCustomersInput } from "../inputs/MediamanagerCreateWithoutCustomersInput";
import { MediamanagerWhereUniqueInput } from "../inputs/MediamanagerWhereUniqueInput";

@TypeGraphQL.InputType("MediamanagerCreateNestedManyWithoutCustomersInput", {
  isAbstract: true
})
export class MediamanagerCreateNestedManyWithoutCustomersInput {
  @TypeGraphQL.Field(_type => [MediamanagerCreateWithoutCustomersInput], {
    nullable: true
  })
  create?: MediamanagerCreateWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerCreateOrConnectWithoutCustomersInput], {
    nullable: true
  })
  connectOrCreate?: MediamanagerCreateOrConnectWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => MediamanagerCreateManyCustomersInputEnvelope, {
    nullable: true
  })
  createMany?: MediamanagerCreateManyCustomersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MediamanagerWhereUniqueInput], {
    nullable: true
  })
  connect?: MediamanagerWhereUniqueInput[] | undefined;
}
