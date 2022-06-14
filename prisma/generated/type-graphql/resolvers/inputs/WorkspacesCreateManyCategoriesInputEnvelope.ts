import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WorkspacesCreateManyCategoriesInput } from "../inputs/WorkspacesCreateManyCategoriesInput";

@TypeGraphQL.InputType("WorkspacesCreateManyCategoriesInputEnvelope", {
  isAbstract: true
})
export class WorkspacesCreateManyCategoriesInputEnvelope {
  @TypeGraphQL.Field(_type => [WorkspacesCreateManyCategoriesInput], {
    nullable: false
  })
  data!: WorkspacesCreateManyCategoriesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
