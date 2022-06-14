import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GlossaryOrderByWithRelationInput } from "../../../inputs/GlossaryOrderByWithRelationInput";
import { GlossaryWhereInput } from "../../../inputs/GlossaryWhereInput";
import { GlossaryWhereUniqueInput } from "../../../inputs/GlossaryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateGlossaryArgs {
  @TypeGraphQL.Field(_type => GlossaryWhereInput, {
    nullable: true
  })
  where?: GlossaryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GlossaryOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: GlossaryOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GlossaryWhereUniqueInput, {
    nullable: true
  })
  cursor?: GlossaryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
