"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneQuotesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesWhereUniqueInput_1 = require("../../../inputs/QuotesWhereUniqueInput");
let DeleteOneQuotesArgs = class DeleteOneQuotesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereUniqueInput_1.QuotesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesWhereUniqueInput_1.QuotesWhereUniqueInput)
], DeleteOneQuotesArgs.prototype, "where", void 0);
DeleteOneQuotesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneQuotesArgs);
exports.DeleteOneQuotesArgs = DeleteOneQuotesArgs;
