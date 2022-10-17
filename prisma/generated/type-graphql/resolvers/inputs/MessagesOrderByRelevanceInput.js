"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessagesOrderByRelevanceFieldEnum_1 = require("../../enums/MessagesOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let MessagesOrderByRelevanceInput = class MessagesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessagesOrderByRelevanceFieldEnum_1.MessagesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], MessagesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MessagesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MessagesOrderByRelevanceInput.prototype, "search", void 0);
MessagesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessagesOrderByRelevanceInput", {
        isAbstract: true
    })
], MessagesOrderByRelevanceInput);
exports.MessagesOrderByRelevanceInput = MessagesOrderByRelevanceInput;
