import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThemesUpdateManyMutationInput } from "../../../inputs/ThemesUpdateManyMutationInput";
import { ThemesWhereInput } from "../../../inputs/ThemesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyThemesArgs {
  @TypeGraphQL.Field(_type => ThemesUpdateManyMutationInput, {
    nullable: false
  })
  data!: ThemesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ThemesWhereInput, {
    nullable: true
  })
  where?: ThemesWhereInput | undefined;
}
