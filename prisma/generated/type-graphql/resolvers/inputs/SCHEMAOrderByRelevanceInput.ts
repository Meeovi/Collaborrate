import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SCHEMAOrderByRelevanceFieldEnum } from "../../enums/SCHEMAOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SCHEMAOrderByRelevanceInput", {
  isAbstract: true
})
export class SCHEMAOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [SCHEMAOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "className"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
