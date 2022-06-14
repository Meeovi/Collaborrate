import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CasesOrderByWithRelationInput } from "../../../inputs/CasesOrderByWithRelationInput";
import { CasesWhereInput } from "../../../inputs/CasesWhereInput";
import { CasesWhereUniqueInput } from "../../../inputs/CasesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCasesArgs {
  @TypeGraphQL.Field(_type => CasesWhereInput, {
    nullable: true
  })
  where?: CasesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CasesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CasesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CasesWhereUniqueInput, {
    nullable: true
  })
  cursor?: CasesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
