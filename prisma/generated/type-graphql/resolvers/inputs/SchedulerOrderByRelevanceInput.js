"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchedulerOrderByRelevanceFieldEnum_1 = require("../../enums/SchedulerOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let SchedulerOrderByRelevanceInput = class SchedulerOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchedulerOrderByRelevanceFieldEnum_1.SchedulerOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], SchedulerOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SchedulerOrderByRelevanceInput.prototype, "search", void 0);
SchedulerOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SchedulerOrderByRelevanceInput", {
        isAbstract: true
    })
], SchedulerOrderByRelevanceInput);
exports.SchedulerOrderByRelevanceInput = SchedulerOrderByRelevanceInput;
