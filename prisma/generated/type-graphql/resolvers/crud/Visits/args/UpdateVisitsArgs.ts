import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VisitsUpdateInput } from "../../../inputs/VisitsUpdateInput";
import { VisitsWhereUniqueInput } from "../../../inputs/VisitsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateVisitsArgs {
  @TypeGraphQL.Field(_type => VisitsUpdateInput, {
    nullable: false
  })
  data!: VisitsUpdateInput;

  @TypeGraphQL.Field(_type => VisitsWhereUniqueInput, {
    nullable: false
  })
  where!: VisitsWhereUniqueInput;
}
