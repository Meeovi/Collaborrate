import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasesCreateInput } from "../../../inputs/CasesCreateInput";
import { CasesUpdateInput } from "../../../inputs/CasesUpdateInput";
import { CasesWhereUniqueInput } from "../../../inputs/CasesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCasesArgs {
  @TypeGraphQL.Field(_type => CasesWhereUniqueInput, {
    nullable: false
  })
  where!: CasesWhereUniqueInput;

  @TypeGraphQL.Field(_type => CasesCreateInput, {
    nullable: false
  })
  create!: CasesCreateInput;

  @TypeGraphQL.Field(_type => CasesUpdateInput, {
    nullable: false
  })
  update!: CasesUpdateInput;
}
