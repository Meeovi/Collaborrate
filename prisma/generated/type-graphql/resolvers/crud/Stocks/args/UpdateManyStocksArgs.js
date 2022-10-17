"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyStocksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StocksUpdateManyMutationInput_1 = require("../../../inputs/StocksUpdateManyMutationInput");
const StocksWhereInput_1 = require("../../../inputs/StocksWhereInput");
let UpdateManyStocksArgs = class UpdateManyStocksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksUpdateManyMutationInput_1.StocksUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StocksUpdateManyMutationInput_1.StocksUpdateManyMutationInput)
], UpdateManyStocksArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksWhereInput_1.StocksWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksWhereInput_1.StocksWhereInput)
], UpdateManyStocksArgs.prototype, "where", void 0);
UpdateManyStocksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyStocksArgs);
exports.UpdateManyStocksArgs = UpdateManyStocksArgs;
