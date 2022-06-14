import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateOrConnectWithoutMediamanagerInput } from "../inputs/CommentsCreateOrConnectWithoutMediamanagerInput";
import { CommentsCreateWithoutMediamanagerInput } from "../inputs/CommentsCreateWithoutMediamanagerInput";
import { CommentsUpdateWithoutMediamanagerInput } from "../inputs/CommentsUpdateWithoutMediamanagerInput";
import { CommentsUpsertWithoutMediamanagerInput } from "../inputs/CommentsUpsertWithoutMediamanagerInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsUpdateOneWithoutMediamanagerInput", {
  isAbstract: true
})
export class CommentsUpdateOneWithoutMediamanagerInput {
  @TypeGraphQL.Field(_type => CommentsCreateWithoutMediamanagerInput, {
    nullable: true
  })
  create?: CommentsCreateWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateOrConnectWithoutMediamanagerInput, {
    nullable: true
  })
  connectOrCreate?: CommentsCreateOrConnectWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => CommentsUpsertWithoutMediamanagerInput, {
    nullable: true
  })
  upsert?: CommentsUpsertWithoutMediamanagerInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CommentsWhereUniqueInput, {
    nullable: true
  })
  connect?: CommentsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CommentsUpdateWithoutMediamanagerInput, {
    nullable: true
  })
  update?: CommentsUpdateWithoutMediamanagerInput | undefined;
}
