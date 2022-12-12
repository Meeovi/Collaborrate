"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediamanagerOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MediamanagerAvgOrderByAggregateInput_1 = require("../inputs/MediamanagerAvgOrderByAggregateInput");
const MediamanagerCountOrderByAggregateInput_1 = require("../inputs/MediamanagerCountOrderByAggregateInput");
const MediamanagerMaxOrderByAggregateInput_1 = require("../inputs/MediamanagerMaxOrderByAggregateInput");
const MediamanagerMinOrderByAggregateInput_1 = require("../inputs/MediamanagerMinOrderByAggregateInput");
const MediamanagerSumOrderByAggregateInput_1 = require("../inputs/MediamanagerSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MediamanagerOrderByWithAggregationInput = class MediamanagerOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "keywords", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "tags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "brands", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "expiration_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "copyright", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "dimensions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "content_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "versions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "watermark_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "watermark_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "watermark_media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "agreements", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "albums", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "workspace", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "task_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "task_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "task_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "members", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "agreements_agreementsTomediamanager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "brands_brandsTomediamanager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "products_mediamanagerToproducts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "tasks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByWithAggregationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerCountOrderByAggregateInput_1.MediamanagerCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerCountOrderByAggregateInput_1.MediamanagerCountOrderByAggregateInput)
], MediamanagerOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerAvgOrderByAggregateInput_1.MediamanagerAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerAvgOrderByAggregateInput_1.MediamanagerAvgOrderByAggregateInput)
], MediamanagerOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerMaxOrderByAggregateInput_1.MediamanagerMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerMaxOrderByAggregateInput_1.MediamanagerMaxOrderByAggregateInput)
], MediamanagerOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerMinOrderByAggregateInput_1.MediamanagerMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerMinOrderByAggregateInput_1.MediamanagerMinOrderByAggregateInput)
], MediamanagerOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerSumOrderByAggregateInput_1.MediamanagerSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerSumOrderByAggregateInput_1.MediamanagerSumOrderByAggregateInput)
], MediamanagerOrderByWithAggregationInput.prototype, "_sum", void 0);
MediamanagerOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MediamanagerOrderByWithAggregationInput", {
        isAbstract: true
    })
], MediamanagerOrderByWithAggregationInput);
exports.MediamanagerOrderByWithAggregationInput = MediamanagerOrderByWithAggregationInput;
