"use strict";
var Project_templatesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project_templatesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let Project_templatesWhereInput = Project_templatesWhereInput_1 = class Project_templatesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Project_templatesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Project_templatesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Project_templatesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Project_templatesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Project_templatesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Project_templatesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], Project_templatesWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Project_templatesWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Project_templatesWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Project_templatesWhereInput.prototype, "consider_working_days", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Project_templatesWhereInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Project_templatesWhereInput.prototype, "project_manager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Project_templatesWhereInput.prototype, "resource", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Project_templatesWhereInput.prototype, "content", void 0);
Project_templatesWhereInput = Project_templatesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Project_templatesWhereInput", {
        isAbstract: true
    })
], Project_templatesWhereInput);
exports.Project_templatesWhereInput = Project_templatesWhereInput;
