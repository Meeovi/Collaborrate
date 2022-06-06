"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyQuotesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesCreateManyInput_1 = require("../../../inputs/QuotesCreateManyInput");
let CreateManyQuotesArgs = class CreateManyQuotesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesCreateManyInput_1.QuotesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyQuotesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyQuotesArgs.prototype, "skipDuplicates", void 0);
CreateManyQuotesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyQuotesArgs);
exports.CreateManyQuotesArgs = CreateManyQuotesArgs;
