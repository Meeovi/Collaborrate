"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWorkspacesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspacesOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/WorkspacesOrderByWithRelationAndSearchRelevanceInput");
const WorkspacesWhereInput_1 = require("../../../inputs/WorkspacesWhereInput");
const WorkspacesWhereUniqueInput_1 = require("../../../inputs/WorkspacesWhereUniqueInput");
let AggregateWorkspacesArgs = class AggregateWorkspacesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesWhereInput_1.WorkspacesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesWhereInput_1.WorkspacesWhereInput)
], AggregateWorkspacesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspacesOrderByWithRelationAndSearchRelevanceInput_1.WorkspacesOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateWorkspacesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput_1.WorkspacesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspacesWhereUniqueInput_1.WorkspacesWhereUniqueInput)
], AggregateWorkspacesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateWorkspacesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateWorkspacesArgs.prototype, "skip", void 0);
AggregateWorkspacesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateWorkspacesArgs);
exports.AggregateWorkspacesArgs = AggregateWorkspacesArgs;
