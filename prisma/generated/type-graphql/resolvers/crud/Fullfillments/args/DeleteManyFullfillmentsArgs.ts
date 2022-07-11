import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FullfillmentsWhereInput } from "../../../inputs/FullfillmentsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFullfillmentsArgs {
  @TypeGraphQL.Field(_type => FullfillmentsWhereInput, {
    nullable: true
  })
  where?: FullfillmentsWhereInput | undefined;
}
