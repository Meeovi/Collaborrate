"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQuotesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesUpdateInput_1 = require("../../../inputs/QuotesUpdateInput");
const QuotesWhereUniqueInput_1 = require("../../../inputs/QuotesWhereUniqueInput");
let UpdateQuotesArgs = class UpdateQuotesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesUpdateInput_1.QuotesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesUpdateInput_1.QuotesUpdateInput)
], UpdateQuotesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereUniqueInput_1.QuotesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesWhereUniqueInput_1.QuotesWhereUniqueInput)
], UpdateQuotesArgs.prototype, "where", void 0);
UpdateQuotesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateQuotesArgs);
exports.UpdateQuotesArgs = UpdateQuotesArgs;
