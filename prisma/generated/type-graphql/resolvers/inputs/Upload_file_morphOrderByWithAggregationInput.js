"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_file_morphOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_file_morphAvgOrderByAggregateInput_1 = require("../inputs/Upload_file_morphAvgOrderByAggregateInput");
const Upload_file_morphCountOrderByAggregateInput_1 = require("../inputs/Upload_file_morphCountOrderByAggregateInput");
const Upload_file_morphMaxOrderByAggregateInput_1 = require("../inputs/Upload_file_morphMaxOrderByAggregateInput");
const Upload_file_morphMinOrderByAggregateInput_1 = require("../inputs/Upload_file_morphMinOrderByAggregateInput");
const Upload_file_morphSumOrderByAggregateInput_1 = require("../inputs/Upload_file_morphSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Upload_file_morphOrderByWithAggregationInput = class Upload_file_morphOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphOrderByWithAggregationInput.prototype, "upload_file_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphOrderByWithAggregationInput.prototype, "related_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphOrderByWithAggregationInput.prototype, "related_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphOrderByWithAggregationInput.prototype, "field", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphOrderByWithAggregationInput.prototype, "order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphCountOrderByAggregateInput_1.Upload_file_morphCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphCountOrderByAggregateInput_1.Upload_file_morphCountOrderByAggregateInput)
], Upload_file_morphOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphAvgOrderByAggregateInput_1.Upload_file_morphAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphAvgOrderByAggregateInput_1.Upload_file_morphAvgOrderByAggregateInput)
], Upload_file_morphOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphMaxOrderByAggregateInput_1.Upload_file_morphMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphMaxOrderByAggregateInput_1.Upload_file_morphMaxOrderByAggregateInput)
], Upload_file_morphOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphMinOrderByAggregateInput_1.Upload_file_morphMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphMinOrderByAggregateInput_1.Upload_file_morphMinOrderByAggregateInput)
], Upload_file_morphOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphSumOrderByAggregateInput_1.Upload_file_morphSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphSumOrderByAggregateInput_1.Upload_file_morphSumOrderByAggregateInput)
], Upload_file_morphOrderByWithAggregationInput.prototype, "_sum", void 0);
Upload_file_morphOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Upload_file_morphOrderByWithAggregationInput", {
        isAbstract: true
    })
], Upload_file_morphOrderByWithAggregationInput);
exports.Upload_file_morphOrderByWithAggregationInput = Upload_file_morphOrderByWithAggregationInput;
