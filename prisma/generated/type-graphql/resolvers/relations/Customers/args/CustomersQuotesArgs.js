"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersQuotesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesOrderByWithRelationInput_1 = require("../../../inputs/QuotesOrderByWithRelationInput");
const QuotesWhereInput_1 = require("../../../inputs/QuotesWhereInput");
const QuotesWhereUniqueInput_1 = require("../../../inputs/QuotesWhereUniqueInput");
const QuotesScalarFieldEnum_1 = require("../../../../enums/QuotesScalarFieldEnum");
let CustomersQuotesArgs = class CustomersQuotesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereInput_1.QuotesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesWhereInput_1.QuotesWhereInput)
], CustomersQuotesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesOrderByWithRelationInput_1.QuotesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomersQuotesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereUniqueInput_1.QuotesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesWhereUniqueInput_1.QuotesWhereUniqueInput)
], CustomersQuotesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CustomersQuotesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CustomersQuotesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesScalarFieldEnum_1.QuotesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CustomersQuotesArgs.prototype, "distinct", void 0);
CustomersQuotesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CustomersQuotesArgs);
exports.CustomersQuotesArgs = CustomersQuotesArgs;
