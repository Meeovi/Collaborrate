import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/UsersOrderByWithRelationAndSearchRelevanceInput";
import { UsersWhereInput } from "../../../inputs/UsersWhereInput";
import { UsersWhereUniqueInput } from "../../../inputs/UsersWhereUniqueInput";
import { UsersScalarFieldEnum } from "../../../../enums/UsersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstUsersArgs {
  @TypeGraphQL.Field(_type => UsersWhereInput, {
    nullable: true
  })
  where?: UsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UsersOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: UsersOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  cursor?: UsersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UsersScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "username" | "first_name" | "last_name" | "email" | "password" | "interface_locale" | "value" | "permissions" | "created_at"> | undefined;
}