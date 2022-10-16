"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCurrency_symbolsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_symbolsCreateManyInput_1 = require("../../../inputs/Currency_symbolsCreateManyInput");
let CreateManyCurrency_symbolsArgs = class CreateManyCurrency_symbolsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_symbolsCreateManyInput_1.Currency_symbolsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCurrency_symbolsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCurrency_symbolsArgs.prototype, "skipDuplicates", void 0);
CreateManyCurrency_symbolsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCurrency_symbolsArgs);
exports.CreateManyCurrency_symbolsArgs = CreateManyCurrency_symbolsArgs;
