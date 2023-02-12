"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyQuotesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesOrderByWithRelationInput_1 = require("../../../inputs/QuotesOrderByWithRelationInput");
const QuotesWhereInput_1 = require("../../../inputs/QuotesWhereInput");
const QuotesWhereUniqueInput_1 = require("../../../inputs/QuotesWhereUniqueInput");
const QuotesScalarFieldEnum_1 = require("../../../../enums/QuotesScalarFieldEnum");
let FindManyQuotesArgs = class FindManyQuotesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereInput_1.QuotesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesWhereInput_1.QuotesWhereInput)
], FindManyQuotesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesOrderByWithRelationInput_1.QuotesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyQuotesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereUniqueInput_1.QuotesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesWhereUniqueInput_1.QuotesWhereUniqueInput)
], FindManyQuotesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyQuotesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyQuotesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesScalarFieldEnum_1.QuotesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyQuotesArgs.prototype, "distinct", void 0);
FindManyQuotesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyQuotesArgs);
exports.FindManyQuotesArgs = FindManyQuotesArgs;
