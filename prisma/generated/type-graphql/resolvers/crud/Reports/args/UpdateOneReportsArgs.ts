import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReportsUpdateInput } from "../../../inputs/ReportsUpdateInput";
import { ReportsWhereUniqueInput } from "../../../inputs/ReportsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneReportsArgs {
  @TypeGraphQL.Field(_type => ReportsUpdateInput, {
    nullable: false
  })
  data!: ReportsUpdateInput;

  @TypeGraphQL.Field(_type => ReportsWhereUniqueInput, {
    nullable: false
  })
  where!: ReportsWhereUniqueInput;
}
