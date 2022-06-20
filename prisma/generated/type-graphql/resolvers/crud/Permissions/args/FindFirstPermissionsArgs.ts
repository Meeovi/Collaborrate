import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PermissionsOrderByWithRelationAndSearchRelevanceInput";
import { PermissionsWhereInput } from "../../../inputs/PermissionsWhereInput";
import { PermissionsWhereUniqueInput } from "../../../inputs/PermissionsWhereUniqueInput";
import { PermissionsScalarFieldEnum } from "../../../../enums/PermissionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPermissionsArgs {
  @TypeGraphQL.Field(_type => PermissionsWhereInput, {
    nullable: true
  })
  where?: PermissionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PermissionsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: PermissionsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => PermissionsWhereUniqueInput, {
    nullable: true
  })
  cursor?: PermissionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PermissionsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "content" | "role" | "create" | "read" | "update" | "delete" | "users"> | undefined;
}
