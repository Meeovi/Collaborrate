import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SurveysCreateInput } from "../../../inputs/SurveysCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSurveysArgs {
  @TypeGraphQL.Field(_type => SurveysCreateInput, {
    nullable: false
  })
  data!: SurveysCreateInput;
}
