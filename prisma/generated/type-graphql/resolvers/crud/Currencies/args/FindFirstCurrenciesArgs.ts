import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrenciesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CurrenciesOrderByWithRelationAndSearchRelevanceInput";
import { CurrenciesWhereInput } from "../../../inputs/CurrenciesWhereInput";
import { CurrenciesWhereUniqueInput } from "../../../inputs/CurrenciesWhereUniqueInput";
import { CurrenciesScalarFieldEnum } from "../../../../enums/CurrenciesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCurrenciesArgs {
  @TypeGraphQL.Field(_type => CurrenciesWhereInput, {
    nullable: true
  })
  where?: CurrenciesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CurrenciesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: CurrenciesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => CurrenciesWhereUniqueInput, {
    nullable: true
  })
  cursor?: CurrenciesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CurrenciesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "code" | "name" | "region"> | undefined;
}
