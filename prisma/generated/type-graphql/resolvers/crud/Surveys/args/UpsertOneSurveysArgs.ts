import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SurveysCreateInput } from "../../../inputs/SurveysCreateInput";
import { SurveysUpdateInput } from "../../../inputs/SurveysUpdateInput";
import { SurveysWhereUniqueInput } from "../../../inputs/SurveysWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSurveysArgs {
  @TypeGraphQL.Field(_type => SurveysWhereUniqueInput, {
    nullable: false
  })
  where!: SurveysWhereUniqueInput;

  @TypeGraphQL.Field(_type => SurveysCreateInput, {
    nullable: false
  })
  create!: SurveysCreateInput;

  @TypeGraphQL.Field(_type => SurveysUpdateInput, {
    nullable: false
  })
  update!: SurveysUpdateInput;
}
