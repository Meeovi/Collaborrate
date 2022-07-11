import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SurveysWhereUniqueInput } from "../../../inputs/SurveysWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSurveysArgs {
  @TypeGraphQL.Field(_type => SurveysWhereUniqueInput, {
    nullable: false
  })
  where!: SurveysWhereUniqueInput;
}
