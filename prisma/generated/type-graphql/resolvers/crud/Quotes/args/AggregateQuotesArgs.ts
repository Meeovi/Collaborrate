import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuotesOrderByWithRelationInput } from "../../../inputs/QuotesOrderByWithRelationInput";
import { QuotesWhereInput } from "../../../inputs/QuotesWhereInput";
import { QuotesWhereUniqueInput } from "../../../inputs/QuotesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateQuotesArgs {
  @TypeGraphQL.Field(_type => QuotesWhereInput, {
    nullable: true
  })
  where?: QuotesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [QuotesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: QuotesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => QuotesWhereUniqueInput, {
    nullable: true
  })
  cursor?: QuotesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
