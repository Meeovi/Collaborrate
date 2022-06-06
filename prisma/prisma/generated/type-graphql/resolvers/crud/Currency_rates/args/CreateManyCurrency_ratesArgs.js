"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCurrency_ratesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_ratesCreateManyInput_1 = require("../../../inputs/Currency_ratesCreateManyInput");
let CreateManyCurrency_ratesArgs = class CreateManyCurrency_ratesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_ratesCreateManyInput_1.Currency_ratesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCurrency_ratesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCurrency_ratesArgs.prototype, "skipDuplicates", void 0);
CreateManyCurrency_ratesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCurrency_ratesArgs);
exports.CreateManyCurrency_ratesArgs = CreateManyCurrency_ratesArgs;
