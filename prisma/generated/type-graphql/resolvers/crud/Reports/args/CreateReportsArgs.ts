import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReportsCreateInput } from "../../../inputs/ReportsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateReportsArgs {
  @TypeGraphQL.Field(_type => ReportsCreateInput, {
    nullable: false
  })
  data!: ReportsCreateInput;
}
