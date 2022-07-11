import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { UsersOrderByRelevanceFieldEnum } from "../../enums/UsersOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("UsersOrderByRelevanceInput", {
  isAbstract: true
})
export class UsersOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [UsersOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"username" | "first_name" | "last_name" | "email" | "password" | "interface_locale" | "value" | "permissions">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
