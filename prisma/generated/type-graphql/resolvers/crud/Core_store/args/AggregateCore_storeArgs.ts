import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Core_storeOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Core_storeOrderByWithRelationAndSearchRelevanceInput";
import { Core_storeWhereInput } from "../../../inputs/Core_storeWhereInput";
import { Core_storeWhereUniqueInput } from "../../../inputs/Core_storeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCore_storeArgs {
  @TypeGraphQL.Field(_type => Core_storeWhereInput, {
    nullable: true
  })
  where?: Core_storeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Core_storeOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Core_storeOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Core_storeWhereUniqueInput, {
    nullable: true
  })
  cursor?: Core_storeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
