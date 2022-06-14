import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SurveysWhereUniqueInput } from "../../../inputs/SurveysWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSurveysArgs {
  @TypeGraphQL.Field(_type => SurveysWhereUniqueInput, {
    nullable: false
  })
  where!: SurveysWhereUniqueInput;
}
