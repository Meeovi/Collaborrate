import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CasesOrderByWithRelationAndSearchRelevanceInput";
import { CasesWhereInput } from "../../../inputs/CasesWhereInput";
import { CasesWhereUniqueInput } from "../../../inputs/CasesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCasesArgs {
  @TypeGraphQL.Field(_type => CasesWhereInput, {
    nullable: true
  })
  where?: CasesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CasesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: CasesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => CasesWhereUniqueInput, {
    nullable: true
  })
  cursor?: CasesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
