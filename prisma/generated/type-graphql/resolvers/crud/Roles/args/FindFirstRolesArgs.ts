import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/RolesOrderByWithRelationAndSearchRelevanceInput";
import { RolesWhereInput } from "../../../inputs/RolesWhereInput";
import { RolesWhereUniqueInput } from "../../../inputs/RolesWhereUniqueInput";
import { RolesScalarFieldEnum } from "../../../../enums/RolesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstRolesArgs {
  @TypeGraphQL.Field(_type => RolesWhereInput, {
    nullable: true
  })
  where?: RolesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RolesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: RolesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => RolesWhereUniqueInput, {
    nullable: true
  })
  cursor?: RolesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [RolesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "role_name" | "content" | "created_at"> | undefined;
}