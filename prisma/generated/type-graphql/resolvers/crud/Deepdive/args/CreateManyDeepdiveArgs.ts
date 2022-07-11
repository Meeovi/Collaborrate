import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeepdiveCreateManyInput } from "../../../inputs/DeepdiveCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDeepdiveArgs {
  @TypeGraphQL.Field(_type => [DeepdiveCreateManyInput], {
    nullable: false
  })
  data!: DeepdiveCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
