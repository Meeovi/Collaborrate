"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_file_morphSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Upload_file_morphSumOrderByAggregateInput = class Upload_file_morphSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphSumOrderByAggregateInput.prototype, "upload_file_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphSumOrderByAggregateInput.prototype, "related_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphSumOrderByAggregateInput.prototype, "order", void 0);
Upload_file_morphSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Upload_file_morphSumOrderByAggregateInput", {
        isAbstract: true
    })
], Upload_file_morphSumOrderByAggregateInput);
exports.Upload_file_morphSumOrderByAggregateInput = Upload_file_morphSumOrderByAggregateInput;
