import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Gift_certificatesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Gift_certificatesOrderByWithRelationAndSearchRelevanceInput";
import { Gift_certificatesWhereInput } from "../../../inputs/Gift_certificatesWhereInput";
import { Gift_certificatesWhereUniqueInput } from "../../../inputs/Gift_certificatesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateGift_certificatesArgs {
  @TypeGraphQL.Field(_type => Gift_certificatesWhereInput, {
    nullable: true
  })
  where?: Gift_certificatesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Gift_certificatesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Gift_certificatesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Gift_certificatesWhereUniqueInput, {
    nullable: true
  })
  cursor?: Gift_certificatesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
