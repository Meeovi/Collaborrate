import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReportsCreateInput } from "../../../inputs/ReportsCreateInput";
import { ReportsUpdateInput } from "../../../inputs/ReportsUpdateInput";
import { ReportsWhereUniqueInput } from "../../../inputs/ReportsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneReportsArgs {
  @TypeGraphQL.Field(_type => ReportsWhereUniqueInput, {
    nullable: false
  })
  where!: ReportsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReportsCreateInput, {
    nullable: false
  })
  create!: ReportsCreateInput;

  @TypeGraphQL.Field(_type => ReportsUpdateInput, {
    nullable: false
  })
  update!: ReportsUpdateInput;
}
