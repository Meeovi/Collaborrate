"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesWhereInput_1 = require("../inputs/QuotesWhereInput");
let QuotesListRelationFilter = class QuotesListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereInput_1.QuotesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesWhereInput_1.QuotesWhereInput)
], QuotesListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereInput_1.QuotesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesWhereInput_1.QuotesWhereInput)
], QuotesListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereInput_1.QuotesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesWhereInput_1.QuotesWhereInput)
], QuotesListRelationFilter.prototype, "none", void 0);
QuotesListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesListRelationFilter", {
        isAbstract: true
    })
], QuotesListRelationFilter);
exports.QuotesListRelationFilter = QuotesListRelationFilter;
