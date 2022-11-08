"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueQuotesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesWhereUniqueInput_1 = require("../../../inputs/QuotesWhereUniqueInput");
let FindUniqueQuotesArgs = class FindUniqueQuotesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereUniqueInput_1.QuotesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesWhereUniqueInput_1.QuotesWhereUniqueInput)
], FindUniqueQuotesArgs.prototype, "where", void 0);
FindUniqueQuotesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueQuotesArgs);
exports.FindUniqueQuotesArgs = FindUniqueQuotesArgs;
