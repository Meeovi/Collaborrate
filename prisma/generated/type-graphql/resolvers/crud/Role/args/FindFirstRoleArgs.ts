import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RoleOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/RoleOrderByWithRelationAndSearchRelevanceInput";
import { RoleWhereInput } from "../../../inputs/RoleWhereInput";
import { RoleWhereUniqueInput } from "../../../inputs/RoleWhereUniqueInput";
import { RoleScalarFieldEnum } from "../../../../enums/RoleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstRoleArgs {
  @TypeGraphQL.Field(_type => RoleWhereInput, {
    nullable: true
  })
  where?: RoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RoleOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: RoleOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => RoleWhereUniqueInput, {
    nullable: true
  })
  cursor?: RoleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [RoleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"objectId" | "createdAt" | "updatedAt" | "name" | "rperm" | "wperm"> | undefined;
}
