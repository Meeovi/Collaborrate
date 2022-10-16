"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCurrency_ratesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_ratesUpdateManyMutationInput_1 = require("../../../inputs/Currency_ratesUpdateManyMutationInput");
const Currency_ratesWhereInput_1 = require("../../../inputs/Currency_ratesWhereInput");
let UpdateManyCurrency_ratesArgs = class UpdateManyCurrency_ratesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesUpdateManyMutationInput_1.Currency_ratesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Currency_ratesUpdateManyMutationInput_1.Currency_ratesUpdateManyMutationInput)
], UpdateManyCurrency_ratesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesWhereInput_1.Currency_ratesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesWhereInput_1.Currency_ratesWhereInput)
], UpdateManyCurrency_ratesArgs.prototype, "where", void 0);
UpdateManyCurrency_ratesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCurrency_ratesArgs);
exports.UpdateManyCurrency_ratesArgs = UpdateManyCurrency_ratesArgs;
