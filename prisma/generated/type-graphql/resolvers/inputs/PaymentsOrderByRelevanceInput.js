"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaymentsOrderByRelevanceFieldEnum_1 = require("../../enums/PaymentsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let PaymentsOrderByRelevanceInput = class PaymentsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaymentsOrderByRelevanceFieldEnum_1.PaymentsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PaymentsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PaymentsOrderByRelevanceInput.prototype, "search", void 0);
PaymentsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaymentsOrderByRelevanceInput", {
        isAbstract: true
    })
], PaymentsOrderByRelevanceInput);
exports.PaymentsOrderByRelevanceInput = PaymentsOrderByRelevanceInput;
