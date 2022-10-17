"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MeetingOrderByRelevanceFieldEnum_1 = require("../../enums/MeetingOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let MeetingOrderByRelevanceInput = class MeetingOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MeetingOrderByRelevanceFieldEnum_1.MeetingOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], MeetingOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MeetingOrderByRelevanceInput.prototype, "search", void 0);
MeetingOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MeetingOrderByRelevanceInput", {
        isAbstract: true
    })
], MeetingOrderByRelevanceInput);
exports.MeetingOrderByRelevanceInput = MeetingOrderByRelevanceInput;
