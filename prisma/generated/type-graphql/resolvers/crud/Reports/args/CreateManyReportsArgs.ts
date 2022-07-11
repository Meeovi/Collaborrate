import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReportsCreateManyInput } from "../../../inputs/ReportsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyReportsArgs {
  @TypeGraphQL.Field(_type => [ReportsCreateManyInput], {
    nullable: false
  })
  data!: ReportsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
