import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/IntegrationsOrderByWithRelationAndSearchRelevanceInput";
import { IntegrationsWhereInput } from "../../../inputs/IntegrationsWhereInput";
import { IntegrationsWhereUniqueInput } from "../../../inputs/IntegrationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateIntegrationsArgs {
  @TypeGraphQL.Field(_type => IntegrationsWhereInput, {
    nullable: true
  })
  where?: IntegrationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IntegrationsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: IntegrationsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => IntegrationsWhereUniqueInput, {
    nullable: true
  })
  cursor?: IntegrationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
