import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasesUpdateInput } from "../../../inputs/CasesUpdateInput";
import { CasesWhereUniqueInput } from "../../../inputs/CasesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCasesArgs {
  @TypeGraphQL.Field(_type => CasesUpdateInput, {
    nullable: false
  })
  data!: CasesUpdateInput;

  @TypeGraphQL.Field(_type => CasesWhereUniqueInput, {
    nullable: false
  })
  where!: CasesWhereUniqueInput;
}
