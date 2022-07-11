import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Join_roles__RoleRelatedIdOwningIdCompoundUniqueInput } from "../inputs/Join_roles__RoleRelatedIdOwningIdCompoundUniqueInput";

@TypeGraphQL.InputType("Join_roles__RoleWhereUniqueInput", {
  isAbstract: true
})
export class Join_roles__RoleWhereUniqueInput {
  @TypeGraphQL.Field(_type => Join_roles__RoleRelatedIdOwningIdCompoundUniqueInput, {
    nullable: true
  })
  relatedId_owningId?: Join_roles__RoleRelatedIdOwningIdCompoundUniqueInput | undefined;
}
