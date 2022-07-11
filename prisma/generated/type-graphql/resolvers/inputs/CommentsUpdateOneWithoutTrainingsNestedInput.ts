import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsCreateOrConnectWithoutTrainingsInput } from "../inputs/CommentsCreateOrConnectWithoutTrainingsInput";
import { CommentsCreateWithoutTrainingsInput } from "../inputs/CommentsCreateWithoutTrainingsInput";
import { CommentsUpdateWithoutTrainingsInput } from "../inputs/CommentsUpdateWithoutTrainingsInput";
import { CommentsUpsertWithoutTrainingsInput } from "../inputs/CommentsUpsertWithoutTrainingsInput";
import { CommentsWhereUniqueInput } from "../inputs/CommentsWhereUniqueInput";

@TypeGraphQL.InputType("CommentsUpdateOneWithoutTrainingsNestedInput", {
  isAbstract: true
})
export class CommentsUpdateOneWithoutTrainingsNestedInput {
  @TypeGraphQL.Field(_type => CommentsCreateWithoutTrainingsInput, {
    nullable: true
  })
  create?: CommentsCreateWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => CommentsCreateOrConnectWithoutTrainingsInput, {
    nullable: true
  })
  connectOrCreate?: CommentsCreateOrConnectWithoutTrainingsInput | undefined;

  @TypeGraphQL.Field(_type => CommentsUpsertWithoutTrainingsInput, {
    nullable: true
  })
  upsert?: CommentsUpsertWithoutTrainingsInput | undefined;

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

  @TypeGraphQL.Field(_type => CommentsUpdateWithoutTrainingsInput, {
    nullable: true
  })
  update?: CommentsUpdateWithoutTrainingsInput | undefined;
}
