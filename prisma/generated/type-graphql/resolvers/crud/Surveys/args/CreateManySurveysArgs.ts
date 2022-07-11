import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SurveysCreateManyInput } from "../../../inputs/SurveysCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySurveysArgs {
  @TypeGraphQL.Field(_type => [SurveysCreateManyInput], {
    nullable: false
  })
  data!: SurveysCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
