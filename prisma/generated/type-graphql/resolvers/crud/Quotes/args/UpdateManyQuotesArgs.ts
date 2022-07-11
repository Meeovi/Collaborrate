import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuotesUpdateManyMutationInput } from "../../../inputs/QuotesUpdateManyMutationInput";
import { QuotesWhereInput } from "../../../inputs/QuotesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyQuotesArgs {
  @TypeGraphQL.Field(_type => QuotesUpdateManyMutationInput, {
    nullable: false
  })
  data!: QuotesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => QuotesWhereInput, {
    nullable: true
  })
  where?: QuotesWhereInput | undefined;
}
