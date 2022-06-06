"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteQuotesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesWhereUniqueInput_1 = require("../../../inputs/QuotesWhereUniqueInput");
let DeleteQuotesArgs = class DeleteQuotesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereUniqueInput_1.QuotesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesWhereUniqueInput_1.QuotesWhereUniqueInput)
], DeleteQuotesArgs.prototype, "where", void 0);
DeleteQuotesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteQuotesArgs);
exports.DeleteQuotesArgs = DeleteQuotesArgs;
