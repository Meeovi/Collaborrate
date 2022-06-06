"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project_templatesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Project_templatesWhereUniqueInput = class Project_templatesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Project_templatesWhereUniqueInput.prototype, "id", void 0);
Project_templatesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Project_templatesWhereUniqueInput", {
        isAbstract: true
    })
], Project_templatesWhereUniqueInput);
exports.Project_templatesWhereUniqueInput = Project_templatesWhereUniqueInput;
