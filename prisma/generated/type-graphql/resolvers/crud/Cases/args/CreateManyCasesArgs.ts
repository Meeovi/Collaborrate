import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasesCreateManyInput } from "../../../inputs/CasesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCasesArgs {
  @TypeGraphQL.Field(_type => [CasesCreateManyInput], {
    nullable: false
  })
  data!: CasesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
