import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ImportmOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ImportmOrderByWithRelationAndSearchRelevanceInput";
import { ImportmWhereInput } from "../../../inputs/ImportmWhereInput";
import { ImportmWhereUniqueInput } from "../../../inputs/ImportmWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateImportmArgs {
  @TypeGraphQL.Field(_type => ImportmWhereInput, {
    nullable: true
  })
  where?: ImportmWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ImportmOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: ImportmOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => ImportmWhereUniqueInput, {
    nullable: true
  })
  cursor?: ImportmWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
