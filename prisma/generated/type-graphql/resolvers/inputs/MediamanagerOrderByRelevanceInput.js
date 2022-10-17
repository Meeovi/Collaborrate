"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediamanagerOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MediamanagerOrderByRelevanceFieldEnum_1 = require("../../enums/MediamanagerOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let MediamanagerOrderByRelevanceInput = class MediamanagerOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MediamanagerOrderByRelevanceFieldEnum_1.MediamanagerOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], MediamanagerOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerOrderByRelevanceInput.prototype, "search", void 0);
MediamanagerOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MediamanagerOrderByRelevanceInput", {
        isAbstract: true
    })
], MediamanagerOrderByRelevanceInput);
exports.MediamanagerOrderByRelevanceInput = MediamanagerOrderByRelevanceInput;
