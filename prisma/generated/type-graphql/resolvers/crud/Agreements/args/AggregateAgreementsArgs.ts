import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AgreementsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/AgreementsOrderByWithRelationAndSearchRelevanceInput";
import { AgreementsWhereInput } from "../../../inputs/AgreementsWhereInput";
import { AgreementsWhereUniqueInput } from "../../../inputs/AgreementsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAgreementsArgs {
  @TypeGraphQL.Field(_type => AgreementsWhereInput, {
    nullable: true
  })
  where?: AgreementsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AgreementsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: AgreementsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => AgreementsWhereUniqueInput, {
    nullable: true
  })
  cursor?: AgreementsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
