"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content_typeOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Content_typeAvgOrderByAggregateInput_1 = require("../inputs/Content_typeAvgOrderByAggregateInput");
const Content_typeCountOrderByAggregateInput_1 = require("../inputs/Content_typeCountOrderByAggregateInput");
const Content_typeMaxOrderByAggregateInput_1 = require("../inputs/Content_typeMaxOrderByAggregateInput");
const Content_typeMinOrderByAggregateInput_1 = require("../inputs/Content_typeMinOrderByAggregateInput");
const Content_typeSumOrderByAggregateInput_1 = require("../inputs/Content_typeSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Content_typeOrderByWithAggregationInput = class Content_typeOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeOrderByWithAggregationInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeOrderByWithAggregationInput.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeOrderByWithAggregationInput.prototype, "json", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeOrderByWithAggregationInput.prototype, "link", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeOrderByWithAggregationInput.prototype, "uid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeOrderByWithAggregationInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeOrderByWithAggregationInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeOrderByWithAggregationInput.prototype, "timestamp", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeOrderByWithAggregationInput.prototype, "boolean", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeOrderByWithAggregationInput.prototype, "rich_text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeOrderByWithAggregationInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeOrderByWithAggregationInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Content_typeOrderByWithAggregationInput.prototype, "database_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeCountOrderByAggregateInput_1.Content_typeCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Content_typeCountOrderByAggregateInput_1.Content_typeCountOrderByAggregateInput)
], Content_typeOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeAvgOrderByAggregateInput_1.Content_typeAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Content_typeAvgOrderByAggregateInput_1.Content_typeAvgOrderByAggregateInput)
], Content_typeOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeMaxOrderByAggregateInput_1.Content_typeMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Content_typeMaxOrderByAggregateInput_1.Content_typeMaxOrderByAggregateInput)
], Content_typeOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeMinOrderByAggregateInput_1.Content_typeMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Content_typeMinOrderByAggregateInput_1.Content_typeMinOrderByAggregateInput)
], Content_typeOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Content_typeSumOrderByAggregateInput_1.Content_typeSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Content_typeSumOrderByAggregateInput_1.Content_typeSumOrderByAggregateInput)
], Content_typeOrderByWithAggregationInput.prototype, "_sum", void 0);
Content_typeOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Content_typeOrderByWithAggregationInput", {
        isAbstract: true
    })
], Content_typeOrderByWithAggregationInput);
exports.Content_typeOrderByWithAggregationInput = Content_typeOrderByWithAggregationInput;
