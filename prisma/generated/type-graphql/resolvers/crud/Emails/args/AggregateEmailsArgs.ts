import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmailsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/EmailsOrderByWithRelationAndSearchRelevanceInput";
import { EmailsWhereInput } from "../../../inputs/EmailsWhereInput";
import { EmailsWhereUniqueInput } from "../../../inputs/EmailsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateEmailsArgs {
  @TypeGraphQL.Field(_type => EmailsWhereInput, {
    nullable: true
  })
  where?: EmailsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EmailsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: EmailsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => EmailsWhereUniqueInput, {
    nullable: true
  })
  cursor?: EmailsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
