import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_rateWhereInput } from "../../../inputs/Tax_rateWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTax_rateArgs {
  @TypeGraphQL.Field(_type => Tax_rateWhereInput, {
    nullable: true
  })
  where?: Tax_rateWhereInput | undefined;
}
