import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SCHEMAOrderByRelevanceInput } from "../inputs/SCHEMAOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SCHEMAOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true
})
export class SCHEMAOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  className?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  schema?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isParseClass?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SCHEMAOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: SCHEMAOrderByRelevanceInput | undefined;
}
