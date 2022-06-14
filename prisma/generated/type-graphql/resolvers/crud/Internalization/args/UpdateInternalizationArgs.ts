import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InternalizationUpdateInput } from "../../../inputs/InternalizationUpdateInput";
import { InternalizationWhereUniqueInput } from "../../../inputs/InternalizationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateInternalizationArgs {
  @TypeGraphQL.Field(_type => InternalizationUpdateInput, {
    nullable: false
  })
  data!: InternalizationUpdateInput;

  @TypeGraphQL.Field(_type => InternalizationWhereUniqueInput, {
    nullable: false
  })
  where!: InternalizationWhereUniqueInput;
}
