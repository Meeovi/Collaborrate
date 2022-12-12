"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketingOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const TicketingOrderByRelevanceFieldEnum_1 = require("../../enums/TicketingOrderByRelevanceFieldEnum");
let TicketingOrderByRelevanceInput = class TicketingOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TicketingOrderByRelevanceFieldEnum_1.TicketingOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TicketingOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByRelevanceInput.prototype, "search", void 0);
TicketingOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TicketingOrderByRelevanceInput", {
        isAbstract: true
    })
], TicketingOrderByRelevanceInput);
exports.TicketingOrderByRelevanceInput = TicketingOrderByRelevanceInput;
