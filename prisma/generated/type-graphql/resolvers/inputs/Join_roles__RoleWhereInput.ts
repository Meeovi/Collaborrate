import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Join_roles__RoleWhereInput", {
  isAbstract: true
})
export class Join_roles__RoleWhereInput {
  @TypeGraphQL.Field(_type => [Join_roles__RoleWhereInput], {
    nullable: true
  })
  AND?: Join_roles__RoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Join_roles__RoleWhereInput], {
    nullable: true
  })
  OR?: Join_roles__RoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Join_roles__RoleWhereInput], {
    nullable: true
  })
  NOT?: Join_roles__RoleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  relatedId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  owningId?: StringFilter | undefined;
}
