"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediamanagerAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MediamanagerAvgOrderByAggregateInput = class MediamanagerAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerAvgOrderByAggregateInput.prototype, "brands", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerAvgOrderByAggregateInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerAvgOrderByAggregateInput.prototype, "agreements", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerAvgOrderByAggregateInput.prototype, "comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerAvgOrderByAggregateInput.prototype, "task_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerAvgOrderByAggregateInput.prototype, "members", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerAvgOrderByAggregateInput.prototype, "products", void 0);
MediamanagerAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MediamanagerAvgOrderByAggregateInput", {
        isAbstract: true
    })
], MediamanagerAvgOrderByAggregateInput);
exports.MediamanagerAvgOrderByAggregateInput = MediamanagerAvgOrderByAggregateInput;
