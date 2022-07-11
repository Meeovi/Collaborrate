import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReportsWhereInput } from "../../../inputs/ReportsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyReportsArgs {
  @TypeGraphQL.Field(_type => ReportsWhereInput, {
    nullable: true
  })
  where?: ReportsWhereInput | undefined;
}
