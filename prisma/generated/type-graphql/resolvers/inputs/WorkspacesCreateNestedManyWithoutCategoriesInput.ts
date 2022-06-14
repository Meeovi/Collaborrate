import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyCategoriesInputEnvelope } from "../inputs/WorkspacesCreateManyCategoriesInputEnvelope";
import { WorkspacesCreateOrConnectWithoutCategoriesInput } from "../inputs/WorkspacesCreateOrConnectWithoutCategoriesInput";
import { WorkspacesCreateWithoutCategoriesInput } from "../inputs/WorkspacesCreateWithoutCategoriesInput";
import { WorkspacesWhereUniqueInput } from "../inputs/WorkspacesWhereUniqueInput";

@TypeGraphQL.InputType("WorkspacesCreateNestedManyWithoutCategoriesInput", {
  isAbstract: true
})
export class WorkspacesCreateNestedManyWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => [WorkspacesCreateWithoutCategoriesInput], {
    nullable: true
  })
  create?: WorkspacesCreateWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesCreateOrConnectWithoutCategoriesInput], {
    nullable: true
  })
  connectOrCreate?: WorkspacesCreateOrConnectWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkspacesCreateManyCategoriesInputEnvelope, {
    nullable: true
  })
  createMany?: WorkspacesCreateManyCategoriesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [WorkspacesWhereUniqueInput], {
    nullable: true
  })
  connect?: WorkspacesWhereUniqueInput[] | undefined;
}
