import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreaterpermInput } from "../inputs/RoleCreaterpermInput";
import { RoleCreatewpermInput } from "../inputs/RoleCreatewpermInput";

@TypeGraphQL.InputType("RoleCreateInput", {
  isAbstract: true
})
export class RoleCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  objectId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => RoleCreaterpermInput, {
    nullable: true
  })
  rperm?: RoleCreaterpermInput | undefined;

  @TypeGraphQL.Field(_type => RoleCreatewpermInput, {
    nullable: true
  })
  wperm?: RoleCreatewpermInput | undefined;
}
