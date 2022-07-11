import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Join_users__RoleRelatedIdOwningIdCompoundUniqueInput } from "../inputs/Join_users__RoleRelatedIdOwningIdCompoundUniqueInput";

@TypeGraphQL.InputType("Join_users__RoleWhereUniqueInput", {
  isAbstract: true
})
export class Join_users__RoleWhereUniqueInput {
  @TypeGraphQL.Field(_type => Join_users__RoleRelatedIdOwningIdCompoundUniqueInput, {
    nullable: true
  })
  relatedId_owningId?: Join_users__RoleRelatedIdOwningIdCompoundUniqueInput | undefined;
}
