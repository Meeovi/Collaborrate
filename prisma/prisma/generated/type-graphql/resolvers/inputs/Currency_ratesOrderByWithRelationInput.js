"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_ratesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Currency_ratesOrderByWithRelationInput = class Currency_ratesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesOrderByWithRelationInput.prototype, "import_service", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesOrderByWithRelationInput.prototype, "usd", void 0);
Currency_ratesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_ratesOrderByWithRelationInput", {
        isAbstract: true
    })
], Currency_ratesOrderByWithRelationInput);
exports.Currency_ratesOrderByWithRelationInput = Currency_ratesOrderByWithRelationInput;
