import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomersOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CustomersOrderByWithRelationAndSearchRelevanceInput";
import { CustomersWhereInput } from "../../../inputs/CustomersWhereInput";
import { CustomersWhereUniqueInput } from "../../../inputs/CustomersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCustomersArgs {
  @TypeGraphQL.Field(_type => CustomersWhereInput, {
    nullable: true
  })
  where?: CustomersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustomersOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: CustomersOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomersWhereUniqueInput, {
    nullable: true
  })
  cursor?: CustomersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
