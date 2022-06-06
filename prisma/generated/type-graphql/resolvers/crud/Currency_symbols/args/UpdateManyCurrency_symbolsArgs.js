"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCurrency_symbolsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_symbolsUpdateManyMutationInput_1 = require("../../../inputs/Currency_symbolsUpdateManyMutationInput");
const Currency_symbolsWhereInput_1 = require("../../../inputs/Currency_symbolsWhereInput");
let UpdateManyCurrency_symbolsArgs = class UpdateManyCurrency_symbolsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsUpdateManyMutationInput_1.Currency_symbolsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_symbolsUpdateManyMutationInput_1.Currency_symbolsUpdateManyMutationInput)
], UpdateManyCurrency_symbolsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsWhereInput_1.Currency_symbolsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsWhereInput_1.Currency_symbolsWhereInput)
], UpdateManyCurrency_symbolsArgs.prototype, "where", void 0);
UpdateManyCurrency_symbolsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCurrency_symbolsArgs);
exports.UpdateManyCurrency_symbolsArgs = UpdateManyCurrency_symbolsArgs;
