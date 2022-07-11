import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShopsCreateWithoutWorkspacesInput } from "../inputs/ShopsCreateWithoutWorkspacesInput";
import { ShopsWhereUniqueInput } from "../inputs/ShopsWhereUniqueInput";

@TypeGraphQL.InputType("ShopsCreateOrConnectWithoutWorkspacesInput", {
  isAbstract: true
})
export class ShopsCreateOrConnectWithoutWorkspacesInput {
  @TypeGraphQL.Field(_type => ShopsWhereUniqueInput, {
    nullable: false
  })
  where!: ShopsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShopsCreateWithoutWorkspacesInput, {
    nullable: false
  })
  create!: ShopsCreateWithoutWorkspacesInput;
}
