"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstWorkspacesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspacesOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/WorkspacesOrderByWithRelationAndSearchRelevanceInput");
const WorkspacesWhereInput_1 = require("../../../inputs/WorkspacesWhereInput");
const WorkspacesWhereUniqueInput_1 = require("../../../inputs/WorkspacesWhereUniqueInput");
const WorkspacesScalarFieldEnum_1 = require("../../../../enums/WorkspacesScalarFieldEnum");
let FindFirstWorkspacesArgs = class FindFirstWorkspacesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesWhereInput_1.WorkspacesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesWhereInput_1.WorkspacesWhereInput)
], FindFirstWorkspacesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspacesOrderByWithRelationAndSearchRelevanceInput_1.WorkspacesOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstWorkspacesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput_1.WorkspacesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesWhereUniqueInput_1.WorkspacesWhereUniqueInput)
], FindFirstWorkspacesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstWorkspacesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstWorkspacesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspacesScalarFieldEnum_1.WorkspacesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstWorkspacesArgs.prototype, "distinct", void 0);
FindFirstWorkspacesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstWorkspacesArgs);
exports.FindFirstWorkspacesArgs = FindFirstWorkspacesArgs;
