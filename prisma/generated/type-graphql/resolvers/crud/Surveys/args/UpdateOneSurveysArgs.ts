import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SurveysUpdateInput } from "../../../inputs/SurveysUpdateInput";
import { SurveysWhereUniqueInput } from "../../../inputs/SurveysWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSurveysArgs {
  @TypeGraphQL.Field(_type => SurveysUpdateInput, {
    nullable: false
  })
  data!: SurveysUpdateInput;

  @TypeGraphQL.Field(_type => SurveysWhereUniqueInput, {
    nullable: false
  })
  where!: SurveysWhereUniqueInput;
}
