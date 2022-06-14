import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateOrConnectWithoutMediamanagerInput } from "../inputs/CommentsCreateOrConnectWithoutMediamanagerInput";
import { CommentsCreateWithoutMediamanagerInput } from "../inputs/CommentsCreateWithoutMediamanagerInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsCreateNestedOneWithoutMediamanagerInput", {
  isAbstract: true
})
export class CommentsCreateNestedOneWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => CommentsCreateWithoutMediamanagerInput, {
    nullable: true
  })
  create?: CommentsCreateWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateOrConnectWithoutMediamanagerInput, {
    nullable: true
  })
  connectOrCreate?: CommentsCreateOrConnectWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: true
  })
  connect?: CommentsWhereUniqueInput | undefined;
}
