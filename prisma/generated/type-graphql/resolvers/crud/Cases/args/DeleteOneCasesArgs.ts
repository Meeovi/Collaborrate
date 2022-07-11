import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasesWhereUniqueInput } from "../../../inputs/CasesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCasesArgs {
  @TypeGraphQL.Field(_type => CasesWhereUniqueInput, {
    nullable: false
  })
  where!: CasesWhereUniqueInput;
}
