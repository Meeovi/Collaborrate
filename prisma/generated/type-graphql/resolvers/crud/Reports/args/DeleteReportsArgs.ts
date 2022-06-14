import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReportsWhereUniqueInput } from "../../../inputs/ReportsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteReportsArgs {
  @TypeGraphQL.Field(_type => ReportsWhereUniqueInput, {
    nullable: false
  })
  where!: ReportsWhereUniqueInput;
}
