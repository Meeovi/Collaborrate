"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_file_morphAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Upload_file_morphAvgOrderByAggregateInput = class Upload_file_morphAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphAvgOrderByAggregateInput.prototype, "upload_file_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphAvgOrderByAggregateInput.prototype, "related_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphAvgOrderByAggregateInput.prototype, "order", void 0);
Upload_file_morphAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Upload_file_morphAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Upload_file_morphAvgOrderByAggregateInput);
exports.Upload_file_morphAvgOrderByAggregateInput = Upload_file_morphAvgOrderByAggregateInput;
