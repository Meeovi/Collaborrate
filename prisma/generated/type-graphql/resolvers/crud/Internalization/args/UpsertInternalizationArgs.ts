import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InternalizationCreateInput } from "../../../inputs/InternalizationCreateInput";
import { InternalizationUpdateInput } from "../../../inputs/InternalizationUpdateInput";
import { InternalizationWhereUniqueInput } from "../../../inputs/InternalizationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertInternalizationArgs {
  @TypeGraphQL.Field(_type => InternalizationWhereUniqueInput, {
    nullable: false
  })
  where!: InternalizationWhereUniqueInput;

  @TypeGraphQL.Field(_type => InternalizationCreateInput, {
    nullable: false
  })
  create!: InternalizationCreateInput;

  @TypeGraphQL.Field(_type => InternalizationUpdateInput, {
    nullable: false
  })
  update!: InternalizationUpdateInput;
}
