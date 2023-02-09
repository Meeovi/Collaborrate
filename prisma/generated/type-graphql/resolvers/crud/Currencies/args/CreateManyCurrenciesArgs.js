"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCurrenciesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrenciesCreateManyInput_1 = require("../../../inputs/CurrenciesCreateManyInput");
let CreateManyCurrenciesArgs = class CreateManyCurrenciesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrenciesCreateManyInput_1.CurrenciesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCurrenciesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCurrenciesArgs.prototype, "skipDuplicates", void 0);
CreateManyCurrenciesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCurrenciesArgs);
exports.CreateManyCurrenciesArgs = CreateManyCurrenciesArgs;
