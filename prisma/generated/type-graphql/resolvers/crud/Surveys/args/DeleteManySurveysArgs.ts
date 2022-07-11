import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SurveysWhereInput } from "../../../inputs/SurveysWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySurveysArgs {
  @TypeGraphQL.Field(_type => SurveysWhereInput, {
    nullable: true
  })
  where?: SurveysWhereInput | undefined;
}
