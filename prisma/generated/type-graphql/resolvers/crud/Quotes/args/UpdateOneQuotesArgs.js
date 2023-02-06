"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneQuotesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesUpdateInput_1 = require("../../../inputs/QuotesUpdateInput");
const QuotesWhereUniqueInput_1 = require("../../../inputs/QuotesWhereUniqueInput");
let UpdateOneQuotesArgs = class UpdateOneQuotesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesUpdateInput_1.QuotesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesUpdateInput_1.QuotesUpdateInput)
], UpdateOneQuotesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereUniqueInput_1.QuotesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesWhereUniqueInput_1.QuotesWhereUniqueInput)
], UpdateOneQuotesArgs.prototype, "where", void 0);
UpdateOneQuotesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneQuotesArgs);
exports.UpdateOneQuotesArgs = UpdateOneQuotesArgs;
