"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCurrenciesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrenciesUpdateManyMutationInput_1 = require("../../../inputs/CurrenciesUpdateManyMutationInput");
const CurrenciesWhereInput_1 = require("../../../inputs/CurrenciesWhereInput");
let UpdateManyCurrenciesArgs = class UpdateManyCurrenciesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesUpdateManyMutationInput_1.CurrenciesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrenciesUpdateManyMutationInput_1.CurrenciesUpdateManyMutationInput)
], UpdateManyCurrenciesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesWhereInput_1.CurrenciesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesWhereInput_1.CurrenciesWhereInput)
], UpdateManyCurrenciesArgs.prototype, "where", void 0);
UpdateManyCurrenciesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCurrenciesArgs);
exports.UpdateManyCurrenciesArgs = UpdateManyCurrenciesArgs;
