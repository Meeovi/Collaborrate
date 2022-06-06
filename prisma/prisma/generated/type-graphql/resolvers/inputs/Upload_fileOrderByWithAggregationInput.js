"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_fileOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_fileAvgOrderByAggregateInput_1 = require("../inputs/Upload_fileAvgOrderByAggregateInput");
const Upload_fileCountOrderByAggregateInput_1 = require("../inputs/Upload_fileCountOrderByAggregateInput");
const Upload_fileMaxOrderByAggregateInput_1 = require("../inputs/Upload_fileMaxOrderByAggregateInput");
const Upload_fileMinOrderByAggregateInput_1 = require("../inputs/Upload_fileMinOrderByAggregateInput");
const Upload_fileSumOrderByAggregateInput_1 = require("../inputs/Upload_fileSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Upload_fileOrderByWithAggregationInput = class Upload_fileOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileOrderByWithAggregationInput.prototype, "alternativeText", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileOrderByWithAggregationInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileOrderByWithAggregationInput.prototype, "width", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileOrderByWithAggregationInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileOrderByWithAggregationInput.prototype, "formats", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileOrderByWithAggregationInput.prototype, "hash", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileOrderByWithAggregationInput.prototype, "ext", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileOrderByWithAggregationInput.prototype, "mime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileOrderByWithAggregationInput.prototype, "size", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileOrderByWithAggregationInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileOrderByWithAggregationInput.prototype, "previewUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileOrderByWithAggregationInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileOrderByWithAggregationInput.prototype, "provider_metadata", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileOrderByWithAggregationInput.prototype, "created_by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileOrderByWithAggregationInput.prototype, "updated_by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileOrderByWithAggregationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileCountOrderByAggregateInput_1.Upload_fileCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileCountOrderByAggregateInput_1.Upload_fileCountOrderByAggregateInput)
], Upload_fileOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileAvgOrderByAggregateInput_1.Upload_fileAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileAvgOrderByAggregateInput_1.Upload_fileAvgOrderByAggregateInput)
], Upload_fileOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileMaxOrderByAggregateInput_1.Upload_fileMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileMaxOrderByAggregateInput_1.Upload_fileMaxOrderByAggregateInput)
], Upload_fileOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileMinOrderByAggregateInput_1.Upload_fileMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileMinOrderByAggregateInput_1.Upload_fileMinOrderByAggregateInput)
], Upload_fileOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileSumOrderByAggregateInput_1.Upload_fileSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileSumOrderByAggregateInput_1.Upload_fileSumOrderByAggregateInput)
], Upload_fileOrderByWithAggregationInput.prototype, "_sum", void 0);
Upload_fileOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Upload_fileOrderByWithAggregationInput", {
        isAbstract: true
    })
], Upload_fileOrderByWithAggregationInput);
exports.Upload_fileOrderByWithAggregationInput = Upload_fileOrderByWithAggregationInput;
