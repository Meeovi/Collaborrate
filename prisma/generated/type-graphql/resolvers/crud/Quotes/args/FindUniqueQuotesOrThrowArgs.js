"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueQuotesOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesWhereUniqueInput_1 = require("../../../inputs/QuotesWhereUniqueInput");
let FindUniqueQuotesOrThrowArgs = class FindUniqueQuotesOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereUniqueInput_1.QuotesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesWhereUniqueInput_1.QuotesWhereUniqueInput)
], FindUniqueQuotesOrThrowArgs.prototype, "where", void 0);
FindUniqueQuotesOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueQuotesOrThrowArgs);
exports.FindUniqueQuotesOrThrowArgs = FindUniqueQuotesOrThrowArgs;
