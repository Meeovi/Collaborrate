"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const StatesOrderByRelevanceFieldEnum_1 = require("../../enums/StatesOrderByRelevanceFieldEnum");
let StatesOrderByRelevanceInput = class StatesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatesOrderByRelevanceFieldEnum_1.StatesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], StatesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StatesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StatesOrderByRelevanceInput.prototype, "search", void 0);
StatesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatesOrderByRelevanceInput", {
        isAbstract: true
    })
], StatesOrderByRelevanceInput);
exports.StatesOrderByRelevanceInput = StatesOrderByRelevanceInput;
