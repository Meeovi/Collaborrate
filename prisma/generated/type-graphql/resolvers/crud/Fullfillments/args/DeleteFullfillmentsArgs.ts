import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FullfillmentsWhereUniqueInput } from "../../../inputs/FullfillmentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteFullfillmentsArgs {
  @TypeGraphQL.Field(_type => FullfillmentsWhereUniqueInput, {
    nullable: false
  })
  where!: FullfillmentsWhereUniqueInput;
}
