"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionsWhereInput_1 = require("../inputs/TransactionsWhereInput");
let TransactionsListRelationFilter = class TransactionsListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsWhereInput_1.TransactionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsWhereInput_1.TransactionsWhereInput)
], TransactionsListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsWhereInput_1.TransactionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsWhereInput_1.TransactionsWhereInput)
], TransactionsListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionsWhereInput_1.TransactionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionsWhereInput_1.TransactionsWhereInput)
], TransactionsListRelationFilter.prototype, "none", void 0);
TransactionsListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionsListRelationFilter", {
        isAbstract: true
    })
], TransactionsListRelationFilter);
exports.TransactionsListRelationFilter = TransactionsListRelationFilter;
