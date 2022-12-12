"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_fileOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const Upload_fileOrderByRelevanceFieldEnum_1 = require("../../enums/Upload_fileOrderByRelevanceFieldEnum");
let Upload_fileOrderByRelevanceInput = class Upload_fileOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Upload_fileOrderByRelevanceFieldEnum_1.Upload_fileOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Upload_fileOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileOrderByRelevanceInput.prototype, "search", void 0);
Upload_fileOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Upload_fileOrderByRelevanceInput", {
        isAbstract: true
    })
], Upload_fileOrderByRelevanceInput);
exports.Upload_fileOrderByRelevanceInput = Upload_fileOrderByRelevanceInput;
