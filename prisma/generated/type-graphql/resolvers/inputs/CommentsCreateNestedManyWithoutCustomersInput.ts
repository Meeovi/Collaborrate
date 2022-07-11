import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateManyCustomersInputEnvelope } from "../inputs/CommentsCreateManyCustomersInputEnvelope";
import { CommentsCreateOrConnectWithoutCustomersInput } from "../inputs/CommentsCreateOrConnectWithoutCustomersInput";
import { CommentsCreateWithoutCustomersInput } from "../inputs/CommentsCreateWithoutCustomersInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsCreateNestedManyWithoutCustomersInput", {
  isAbstract: true
})
export class CommentsCreateNestedManyWithoutCustomersInput {
  @TypeGraphQL.Field(_type => [CommentsCreateWithoutCustomersInput], {
    nullable: true
  })
  create?: CommentsCreateWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsCreateOrConnectWithoutCustomersInput], {
    nullable: true
  })
  connectOrCreate?: CommentsCreateOrConnectWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateManyCustomersInputEnvelope, {
    nullable: true
  })
  createMany?: CommentsCreateManyCustomersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentsWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentsWhereUniqueInput[] | undefined;
}
