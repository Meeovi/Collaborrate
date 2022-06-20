import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContractsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ContractsOrderByWithRelationAndSearchRelevanceInput";
import { ContractsWhereInput } from "../../../inputs/ContractsWhereInput";
import { ContractsWhereUniqueInput } from "../../../inputs/ContractsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateContractsArgs {
  @TypeGraphQL.Field(_type => ContractsWhereInput, {
    nullable: true
  })
  where?: ContractsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContractsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: ContractsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => ContractsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ContractsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
