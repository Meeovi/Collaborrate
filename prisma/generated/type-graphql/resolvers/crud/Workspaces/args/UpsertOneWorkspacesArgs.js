"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneWorkspacesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspacesCreateInput_1 = require("../../../inputs/WorkspacesCreateInput");
const WorkspacesUpdateInput_1 = require("../../../inputs/WorkspacesUpdateInput");
const WorkspacesWhereUniqueInput_1 = require("../../../inputs/WorkspacesWhereUniqueInput");
let UpsertOneWorkspacesArgs = class UpsertOneWorkspacesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput_1.WorkspacesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspacesWhereUniqueInput_1.WorkspacesWhereUniqueInput)
], UpsertOneWorkspacesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesCreateInput_1.WorkspacesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspacesCreateInput_1.WorkspacesCreateInput)
], UpsertOneWorkspacesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesUpdateInput_1.WorkspacesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspacesUpdateInput_1.WorkspacesUpdateInput)
], UpsertOneWorkspacesArgs.prototype, "update", void 0);
UpsertOneWorkspacesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneWorkspacesArgs);
exports.UpsertOneWorkspacesArgs = UpsertOneWorkspacesArgs;
