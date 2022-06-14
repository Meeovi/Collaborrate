import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReportsUpdateManyMutationInput } from "../../../inputs/ReportsUpdateManyMutationInput";
import { ReportsWhereInput } from "../../../inputs/ReportsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyReportsArgs {
  @TypeGraphQL.Field(_type => ReportsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReportsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ReportsWhereInput, {
    nullable: true
  })
  where?: ReportsWhereInput | undefined;
}
