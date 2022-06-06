"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertProject_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Project_templatesCreateInput_1 = require("../../../inputs/Project_templatesCreateInput");
const Project_templatesUpdateInput_1 = require("../../../inputs/Project_templatesUpdateInput");
const Project_templatesWhereUniqueInput_1 = require("../../../inputs/Project_templatesWhereUniqueInput");
let UpsertProject_templatesArgs = class UpsertProject_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesWhereUniqueInput_1.Project_templatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Project_templatesWhereUniqueInput_1.Project_templatesWhereUniqueInput)
], UpsertProject_templatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesCreateInput_1.Project_templatesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Project_templatesCreateInput_1.Project_templatesCreateInput)
], UpsertProject_templatesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_templatesUpdateInput_1.Project_templatesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Project_templatesUpdateInput_1.Project_templatesUpdateInput)
], UpsertProject_templatesArgs.prototype, "update", void 0);
UpsertProject_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertProject_templatesArgs);
exports.UpsertProject_templatesArgs = UpsertProject_templatesArgs;
