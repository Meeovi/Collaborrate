import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FullfillmentsCreateInput } from "../../../inputs/FullfillmentsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateFullfillmentsArgs {
  @TypeGraphQL.Field(_type => FullfillmentsCreateInput, {
    nullable: false
  })
  data!: FullfillmentsCreateInput;
}
