import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_categoryOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Tax_categoryOrderByWithRelationAndSearchRelevanceInput";
import { Tax_categoryWhereInput } from "../../../inputs/Tax_categoryWhereInput";
import { Tax_categoryWhereUniqueInput } from "../../../inputs/Tax_categoryWhereUniqueInput";
import { Tax_categoryScalarFieldEnum } from "../../../../enums/Tax_categoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTax_categoryArgs {
  @TypeGraphQL.Field(_type => Tax_categoryWhereInput, {
    nullable: true
  })
  where?: Tax_categoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Tax_categoryOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Tax_categoryOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Tax_categoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: Tax_categoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Tax_categoryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "name" | "default"> | undefined;
}
